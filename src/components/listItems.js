import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteAdd from '@material-ui/icons/NoteAdd';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import Visibility from '@material-ui/icons/Visibility';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Deposits from './Deposits';

 function uploadFIR(event) {    
       ReactDOM.render(<Dashboard />, document.getElementById('root'));
 }
  function regNewFIR(event) {    
       ReactDOM.render(<Deposits />, document.getElementById('root'));
 }

export const mainListItems = (
  <div>
    <ListItem button onClick={regNewFIR}>
      <ListItemIcon>
        <NoteAdd />
      </ListItemIcon>
      <ListItemText primary="Register New FIR" />
    </ListItem>
    <ListItem button onClick={uploadFIR}>
      <ListItemIcon>
        <PlaylistAddCheck />
      </ListItemIcon>
      
      <ListItemText primary="Upload Verified FIR" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Visibility />
      </ListItemIcon>
      <ListItemText primary="View FIR" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Visibility />
      </ListItemIcon>
      <ListItemText primary="Unverfied FIR" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Admin" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
