import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { authInstance } from '@/api/axiosCustom';
import { NoteContentType } from '@/types/note';

type UserInfoProps = {
  userId: number | undefined;
};

function NoteDetail({ userId }: UserInfoProps) {
  const [noteContent, setNoteContent] = useState<NoteContentType[]>([]);

  console.log(noteContent);

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
    <>
      {noteContent.reverse().map((note, i) => (
        <Div key={i}>
          {note.sender === true ? (
            <BackGroundDiv>
              <NoteListDiv>
                <SendTextSpan style={{ color: '#F8D23E' }}>
                  보낸쪽지
                </SendTextSpan>
                <CreateNoteSpan>
                  {note.created_at.substring(0, 10).replace(/-/g, '.')}
                </CreateNoteSpan>
                <ContentNoteP>{note.content}</ContentNoteP>
              </NoteListDiv>
            </BackGroundDiv>
          ) : (
            <BackGroundDiv>
              <NoteListDiv>
                <SendTextSpan style={{ color: '#42A2AE' }}>
                  받은쪽지
                </SendTextSpan>
                <CreateNoteSpan>
                  {note.created_at.substring(0, 10).replace(/-/g, '.')}
                </CreateNoteSpan>
                <ContentNoteP>{note.content}</ContentNoteP>
              </NoteListDiv>
            </BackGroundDiv>
          )}
        </Div>
      ))}
    </>
  );
}

export default NoteDetail;

const Div = styled.div`
  color: ${(props) => props.theme.main_brown};
`;

const BackGroundDiv = styled.div`
  display: flex;
`;

const NoteListDiv = styled.div`
  height: 13rem;
  width: 100%;
  padding: 30px 20px 20px 20px;
  margin: 0 3.5rem;
  border-bottom: 2px solid ${(props) => props.theme.horizon_gray};
`;

const ContentNoteP = styled.p`
  color: black;
  margin-top: 20px;
  font-weight: 500;
`;

const CreateNoteSpan = styled.span`
  float: right;
  font-weight: 400;
`;

const SendTextSpan = styled.span`
margin-bottom: '20px',
font-size: '1.7rem',
font-weight: 'bold',
`;

('#F8D23E'); //보낸쪽지 노란색

('#42A2AE'); //받은쪽지 파란색
