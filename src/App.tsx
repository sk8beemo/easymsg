import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './style';


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Список телефонов"
              multiline
              rows={10}
              defaultValue="вставьте номера через любой разделитель"
              variant="outlined"
            />
            <Button variant="contained" color="primary" disableElevation>
              выбрать из файла
            </Button>
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Сообщение"
              multiline
              rows={10}
              defaultValue="Вебинар начинаем через час. Доступ"
              variant="outlined"
            />
            <Button variant="contained" color="primary" disableElevation>
              прикрепить файл
            </Button>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
