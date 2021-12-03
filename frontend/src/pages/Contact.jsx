import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 640px;
  width: 100%;
  /* height: 800px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
  overflow-y: scroll;
  padding: 20px 0;
`;

function Contact() {
  return (
    <Container>
      <h1>Contact</h1>
    </Container>
  );
}

export default Contact;
