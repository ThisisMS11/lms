import React, { useState } from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
// import TextField from '@mui/material/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

const ModeToggle = () => {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);



    // necessary for server-side rendering
    // because mode is undefined on the server
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="outlined"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    );
};

export default function SignUp() {

    const [userinfo, setUserinfo] = useState({ name: "", email: "", password: "", cpassword: "" });

    const handleOnChange = (e) => {
        setUserinfo({ ...userinfo, [e.target.name]: e.target.value })
    }

    const givestatus = () => {
        console.log(userinfo)
    }

    return (
        <CssVarsProvider>
            <main className=' border-red-600 py-4'>
                {/* <ModeToggle /> */}
                <Sheet
                    sx={{
                        maxWidth: 400,
                        mx: 'auto', // margin left & right
                        my: 4, // margin top & botom
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                    variant="outlined"
                >
                    <div>
                        <Typography level="h4" component="h1" className='text-center my-2'>
                            <b>SignUp To FastWash!</b>
                        </Typography>
                    </div>
                    <TextField
                        // html input attribute
                        name="name"
                        type="text"
                        variant="outlined"
                        placeholder="Enter the Username"
                        // pass down to FormLabel as children
                        label="Name"
                        value={userinfo.name}

                        onChange={handleOnChange}
                    />

                    <TextField
                        // html input attribute
                        name="email"
                        type="email"
                        variant="outlined"
                        placeholder="johndoe@email.com"
                        // pass down to FormLabel as children
                        label="Email"
                        value={userinfo.email}

                        onChange={handleOnChange}
                    />

                    <TextField
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        label="Password"
                        value={userinfo.password}
                        onChange={handleOnChange}
                    />

                    <TextField
                        name="cpassword"
                        type="password"
                        placeholder="Confirm password"
                        label= "Confirm Password"
                        value={userinfo.cpassword}
                        onChange={handleOnChange}
                    />
                    <Button
                        sx={{
                            mt: 1, // margin top
                        }}
                        onClick={givestatus}>
                        Log in
                    </Button>
                    <Typography
                        endDecorator={<Link href="/login">Log in</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Already have an account?
                    </Typography>
                </Sheet>
            </main>
        </CssVarsProvider>
    );
}
