import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 620px;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  margin-right: 10px;
  width: 100%;
  padding: 10px;
`;

export const AddButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.buttonBackground};
  color: white;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: ${(props) => props.theme.buttonBackgroundHover};
  }
`;

export const NoteContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoteItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.noteBackground};
`;

export const NoteText = styled.span`
  flex-grow: 1;
`;

export const ActionButton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.actionButtonBackground};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.actionButtonBackgroundHover};
  }
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.errorText};
  background-color: ${(props) => props.theme.errorBackground};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

export const LoadingMessage = styled.div`
  color: ${(props) => props.theme.loadingText};
  background-color: ${(props) => props.theme.loadingBackground};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  text-align: center;
`;