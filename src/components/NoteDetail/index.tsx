import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { authInstance } from '@/api/axiosCustom';
import { NoteContentType } from '@/types/note';

type UserInfoProps = {
  userId: number | undefined;
};

function NoteDetail({ userId }: UserInfoProps) {
  const [noteContent, setNoteContent] = useState<NoteContentType[]>([]);

  useEffect(() => {
    authInstance
      .get(`/notes/${userId}/`)
      .then((data) => {
        setNoteContent(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <Div>
      <div style={{ display: 'flex' }}>
        <NoteListDiv>
          <span
            style={{
              fontWeight: 'bold',
              color: '#42A2AE',
              fontSize: '1.7rem',
              marginBottom: '20px',
            }}
          >
            받은쪽지
          </span>
          <span style={{ float: 'right', fontWeight: '400' }}>2023.04.10</span>
          <p style={{ color: 'black', marginTop: '20px', fontWeight: '500' }}>
            네
          </p>
        </NoteListDiv>
      </div>

      {noteContent.map((note, i) => (
        <div style={{ display: 'flex' }} key={i}>
          <NoteListDiv>
            <span
              style={{
                fontWeight: 'bold',
                color: '#F8D23E',
                fontSize: '1.7rem',
                marginBottom: '20px',
              }}
            >
              보낸쪽지
            </span>
            <span style={{ float: 'right', fontWeight: '400' }}>
              {note.created_at.substring(0, 10).replace(/-/g, '.')}
            </span>
            <p style={{ color: 'black', marginTop: '20px', fontWeight: '500' }}>
              {note.content}
            </p>
          </NoteListDiv>
        </div>
      ))}
    </Div>
  );
}

export default NoteDetail;

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
`;

const NoteListDiv = styled.div`
  height: 13rem;
  width: 100%;
  padding: 30px 20px 20px 20px;
  margin: 0 3.5rem;
  border-bottom: 2px solid ${(props) => props.theme.horizon_gray};
`;
