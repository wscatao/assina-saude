import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
        avatar={<AccessTimeIcon style={{ color: 'white' }} />}
        title={<Typography className={classes.title}>Anamnese</Typography>}
        subheader={
          <Typography className={classes.title}>
            {`Hora: ${time} Data: ${date}`}
          </Typography>
        }
      />
      <CardContent>
        <Typography component="div" className={classes.label}>
          Queixa principal:
        </Typography>
        <Typography component="div">{queixa.label}</Typography>
        <Typography component="div" className={classes.label}>
          Doenças Adulto:
        </Typography>
        <Typography component="div">
          {doencas.map(({ label }) => (
            <Chip
              key={label}
              className={classes.chip}
              label={label}
              size="small"
              disabled
            />
          ))}
        </Typography>
        <Typography component="div" className={classes.label}>
          Histórico da moléstia:
        </Typography>
        <Typography component="div">{historico}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProntCard;

ProntCard.propTypes = {
  created: PropTypes.string.isRequired,
  doencas: PropTypes.arrayOf(PropTypes.object).isRequired,
  historico: PropTypes.oneOfType([PropTypes.string]).isRequired,
  queixa: PropTypes.shape({ label: PropTypes.string, id: PropTypes.number })
    .isRequired,
};
