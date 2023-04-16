import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const BoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '300px',
  height: '280px',
  bgcolor: 'var(--white)',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  paddingTop: '5px',
  paddingLeft: '1px',
  paddingBottom:'15px',
  paddingRight: '5px',
  boxShadow:  '0px 0px 29px rgba(0, 0, 0, 0.13)',
};

export const TypograpyTitleStyle = {
  textAlign: 'left',
  textTransform: 'none',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: 'calc(17px + 0.28vw)',
  lineHeight: '23px',
  color: '#86BD2C',
  width: '100%',
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingBottom:'10px',
  paddingRight: '20px',
  display:"inline",
}

export const TypograpyTextStyle = {
  textAlign: 'left',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: 'calc(18px + 0.28vw)',
  color: '#656565',
  width: '100%',
  paddingBottom:'40px',
  paddingTop:'40px',
  paddingLeft:'15px',
  paddingRight:'15px',
}