import styled from '@emotion/styled';

export const FoodContainer = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'start',
  paddingTop: '17px',
  columnGap: '20px',
  height: '128px',
  borderBottom: `1px solid ${theme.custom.beige.secondary}`,
  ':hover': {
    backgroundColor: theme.custom.beige.main,
  },
}));

export const CustomCheckbox = styled.input(({ theme }) => ({
  marginLeft: '12px',
}));

export const CustomImage = styled.div(({ theme }) => ({
  width: '63px',
  height: '63px',
  borderRadius: '10px',
  backgroundColor: theme.custom.accent,
}));

export const FlexDiv = styled.div(({ theme }) => ({
  display: 'flex',
  columnGap: '7px',
}));

export const FlexDiv2 = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '20px',
}));

export const FoodName = styled.div(({ theme }) => ({
  fontSize: '18px',
  color: theme.custom.primary,
  fontWeight: 'bold',
}));
export const FoodInfo = styled.div(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 'bold',
  color: theme.custom.secondary.main,
}));

