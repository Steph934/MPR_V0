import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container } from '@mui/material';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
  
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found | Minimal UI </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Sorry, page not found!
          </Typography>
           
           
            <img src="/assets/illustrations/404_loney.png" alt='404'/>

          <Typography sx={{ color: 'text.secondary' }}>
            Désolé, nous n'avont pas trouver la page que vous demander. Peut être vous avez demandé une URL inexistante ? Soyez sur vos url.
          </Typography>
          
{/* carac image */}
          {/* sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }} */}


         
          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}
