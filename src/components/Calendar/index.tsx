import styled from '@emotion/styled';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear } from 'date-fns';
import { ko } from 'date-fns/locale';
import styles from './styles.module.scss';

const YEARS = Array.from(
  { length: getYear(new Date()) + 1 - 2000 },
  (_, i) => getYear(new Date()) + i
);
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function CalendarInput() {
  const [value, onChange] = useState<Date | null>();

  return (
    <CustomCalendar
      selected={value || null}
      shouldCloseOnSelect
      onChange={(date: Date) => onChange(date)}
      onChangeRaw={(e) => e.preventDefault()}
      onFocus={(e) => e.target.blur()}
      dateFormat="yyyy-MM-dd"
      locale={ko}
      minDate={new Date()}
      showPopperArrow={false}
      placeholderText="마감 날짜를 선택하세요."
      calendarClassName={styles.calenderWrapper}
      dayClassName={(d) =>
        value && d.getDate() === value!.getDate()
          ? styles.selectedDay
          : styles.unselectedDay
      }
      className={styles.datePicker}
      renderCustomHeader={({
        date,
        changeYear,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={styles.customHeaderContainer}>
          <div>
            <span className={styles.month}>{MONTHS[getMonth(date)]}</span>
            <select
              value={getYear(date)}
              className={styles.year}
              onChange={({ target: { value } }) => changeYear(+value)}
            >
              {YEARS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              type="button"
              onClick={decreaseMonth}
              className={styles.monthButton}
              disabled={prevMonthButtonDisabled}
            >
              {/* <LeftArrow fill='#ffffff' /> */}
              <p>&lt;</p>
            </button>
            <button
              type="button"
              onClick={increaseMonth}
              className={styles.monthButton}
              disabled={nextMonthButtonDisabled}
            >
              {/* <RightArrow fill='#ffffff' /> */}
              <p>&gt;</p>
            </button>
          </div>
        </div>
      )}
    />
  );
}

// const Container = styled.div`
//   height: 4.6rem;
//   border: 1px solid ${(props) => props.theme.main_brown};
//   border-radius: 6px;
//   padding: 0.5em;
//   outline: none;
//   font-size: 1.6rem;
//   color: ${(props) => props.theme.text_color};
//   & input {
//     color: ${(props) => props.theme.text_color};
//   }
// `;
const CustomCalendar = styled(DatePicker)`
  width: 100%;
  height: 4.6rem;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.main_brown};
  border-radius: 6px;
  background-color: transparent;
  color: ${(props) => props.theme.text_color};
  padding: 0 1rem;
  cursor: pointer;
  &:focus {
    border-width: 2px;
  }
`;
