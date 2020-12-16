import React from 'react';
import Container from './components/Container';
import Card from './components/Card';
import Button from './components/Button';
import Typography from './components/Typography/Typography';

const App = () => {
  return (
    <Container>
      <Card
        heading1="WILLIAMS,"
        heading2="Jonatan Simson"
        subheading="NHS 123 567 766"
        button={<Button>See details</Button>}
      >
        <Typography variant="contentHeader">
          GENDER
        </Typography>
        <Typography>
          Male
        </Typography>
        <Typography variant="contentHeader">
          BORN
        </Typography>
        <Typography>
          14-Jul-1956 (39y)
        </Typography>
      </Card>
    </Container>
  );
}

export default App;
