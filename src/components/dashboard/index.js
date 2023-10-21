import { Box, Typography, Button , TextField} from "@mui/material";
import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';


function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
        if (focused) {
            return 'e.g. Web Development, Machine Learning, Quant etc.';
        }

        return 'Enter your interest';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
}
export default function Dashboard() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "5rem",
            }}
        >
            <Box
                sx={{
                    // justifyContent:"center",
                    // alignSelf:"center",
                }}
            >
                <Typography variant="h6" component="h2"
                    sx={{
                        textAlign: "center",
                        margin: "0.5rem",
                        // display:"flex",
                    }}
                >
                    Add your interest
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent:"center",
                    }}
                >
                    {/* <form
                        style={{
                            // height:"5px",
                            margin:"0.5rem",
                            
                        }}
                        noValidate
                        autoComplete="off"

                    >
                        <FormControl sx={{ width: '50ch' }}>
                            <OutlinedInput />
                            <MyFormHelperText />
                        </FormControl>
                    </form> */}
                    <TextField  
                        sx={{
                            marginRight:"1rem",
                            // height:"",
                            
                        }}
                        id="outlined-basic" label="Enter here" variant="outlined"
                        size="small"
                    />
                    <Button variant="contained" color="success"
                        sx={{
                            height:"45px",
                            // marginBottom:""
                        }}
                    >
                        Add
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    margin:"6rem 0",
                }}
            >Box 2</Box>
            {/* <Box>Box 3</Box> */}
        </Box>
    )
}