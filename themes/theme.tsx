import red from '@material-ui/core/colors/red'; 
import { createMuiTheme } from '@material-ui/core/styles'; 

// Create a theme instance. 
const theme = createMuiTheme({ 
    palette: { 
        primary: { 
            main: '#d50000' 
        }, 
        secondary: { 
            main: '#3e0202' 
        }, 
        error: { 
            main: red.A400 
        }, 
        background: { 
            default: '#fff' 
        } 
    } 
}); 

export default theme; 
