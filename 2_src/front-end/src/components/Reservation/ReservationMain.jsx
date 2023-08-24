import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const Container = styled.div`
  display: flex;
  width: 35%;
  height: auto;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const DateTimePickerContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  border: 1px solid black;
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid black;
  width: 15rem;
`;

const ReservationButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationMain = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const placeholderText = '예약 날짜와 시간을 선택하세요 ▼'; // 원하는 플레이스홀더 텍스트

  const handleReservation = () => {
    // Handle reservation logic here
    console.log('Date:', selectedDate);
  };

  return (
    <Container>
      <Title>예약 날짜 선택</Title>
      <DateTimePickerContainer>
        <StyledDatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="시간"
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText={placeholderText} // 플레이스홀더 텍스트 설정
        />
        <ReservationButton onClick={handleReservation}>예약하기</ReservationButton>
      </DateTimePickerContainer>
    </Container>
  );
};

export default ReservationMain;
