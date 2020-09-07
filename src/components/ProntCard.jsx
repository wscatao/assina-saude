import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.cardSubHeader,
  },
  title: {
    color: 'white',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '1rem', 
  },
}));

const ProntCard = (props) => {
  const { created, queixa, doencas, historico } = props;
  const dateRegex = /[0-9]+-[0-9]+-[0-9]+/g;
  const timeRegex = /[0-9]+:[0-9]+:[0-9]+/g;
  const time = created.match(timeRegex)[0];
  const date = created.match(dateRegex)[0].split('-').reverse().join('/');
  const classes = useStyles();
  // 
  return (
    <Card>
      <CardHeader
        className={classes.root}
        avatar={<AccessTimeIcon style={ { color: 'white' } }/>}
        title={
          <Typography className={classes.title}>
            Anamnese
          </Typography>
        }
        subheader={
          <Typography className={classes.title}>
            {`Hora: ${time} Data: ${date}`}
          </Typography>
        }
        square={true}
      />
      <CardContent>
        <Typography className={classes.label} >Queixa principal:</Typography>
        <Typography>{queixa.label}</Typography>
        <Typography className={classes.label}>Doenças Adulto:</Typography>
        <Typography>
          {doencas.map(({ label }) => (
            <Chip className={classes.chip} label={label} size="small" disabled />
          ))}
        </Typography>
        <Typography className={classes.label}>Histórico da moléstia:</Typography>
        <Typography>{historico}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProntCard;
