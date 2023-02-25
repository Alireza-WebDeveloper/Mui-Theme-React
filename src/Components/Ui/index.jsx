import { styled } from '@mui/system';

const StyledButton = styled('button')(({ theme }) => ({
  border: `solid 2px ${theme.palette.warning.main}`,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  width: 100,
  height: 50,
  fontFamily: theme.typography.fontFamily,
  cursor: 'pointer',
}));

export { StyledButton };
