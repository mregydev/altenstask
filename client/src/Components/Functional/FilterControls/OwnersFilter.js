
import MultiPicker from 'material-multi-picker';
import React from 'react';
import { CardContent, CardHeader, Avatar, Fade, CardActions, Button, Card } from '@material-ui/core'
import Messages from '../../Messages'

import styles from './styles.module.css'

function FavouriteThingPicker(props) {
  const getSuggestions = (inputValue) => props.items.filter(
    thing => thing.includes(inputValue.toLowerCase())
  );
  return (
    <Fade in={props.isOwnersFilterShown} mountOnEnter unmountOnExit>

      <React.Fragment>
        <div className={styles.filterBg} />

        <div id="ownersFilterDiv" className={styles.filterContainer}>
          <Card className={styles.filterWndw}>
            <CardHeader className={styles.filterHeader} disableTypography={true} title={Messages[props.lang]["InsertNamesToFilter"]} />

            <CardContent>

              <div className={styles.multiPicker}>
                <MultiPicker
                  value={props.filterCriteria.ownerNames}
                  onChange={(val) => { props.OwnersFilterChanged({ ...props.filterCriteria, ownerNames: val.toString().trim() ? val.toString().split(',') : [] }) }}
                  getSuggestedItems={getSuggestions}
                  itemToString={item => item}
                  fullWidth={true}
                  chipColor='primary'

                />
              </div>

            </CardContent>
            <CardActions className={styles.closeBtn}>
              <div>
                <Button color='primary' variant="contained" onClick={() => { props.toggleOwnersFilter() }} >{Messages[props.lang]['close']}</Button>
              </div>
            </CardActions>
          </Card>
        </div>
      </React.Fragment>
    </Fade>
  );
}

export default FavouriteThingPicker