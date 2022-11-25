import React, { useState, useContext, useEffect } from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
// import TextField from '@mui/material/TextField';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/joy/Link';
import UserContext from '../context/Users/UserContext';

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

export default function Login() {

    useEffect(() => {
        /* loading bar starts*/

        setprogress(50)
        setTimeout(() => {
            setprogress(65)
        }, 500);
        setTimeout(() => {
            setprogress(100)
        }, 700);

        /* loading bar ends*/
    }, [])

    const navigate = useNavigate();


    const context = useContext(UserContext);
    let { setprogress, Acuserinfo, setAcuserinfo } = context;


    const [userinfo, setUserinfo] = useState({ email: "", password: "" });

    const handleOnChange = (e) => {
        setUserinfo({ ...userinfo, [e.target.name]: e.target.value })
    }

    const HandleLogin = async (e) => {
        e.preventDefault();

        setprogress(30)
        const response = await fetch("http://127.0.0.1:8000/api/user/login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userinfo.email, password: userinfo.password })
        });
        setprogress(80)
        // json contains success msg and auth token
        const json = await response.json();

        if (json.msg == "Login Success") {
            console.log('login good mohit')
            localStorage.setItem('token', json.token.access);


            /* storing the user info here*/
            async function fetchUser() {
                const response = await fetch("http://127.0.0.1:8000/api/user/profile/", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const json = await response.json();

                setAcuserinfo(json);

                localStorage.setItem('userid', json.id);
            }

            fetchUser();


            navigate('/')
        }

        setprogress(100)
    }


    return (
        <CssVarsProvider>
            <main className=' border-red-600 py-16'>
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
                            <b>Welcome To FastWash!</b>
                        </Typography>
                    </div>

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
                        placeholder="password"
                        label="Password"
                        value={userinfo.password}
                        onChange={handleOnChange}
                    />
                    <Button
                        sx={{
                            mt: 1, // margin top
                        }}
                        onClick={HandleLogin}>
                        Log in
                    </Button>
                    <Typography
                        endDecorator={<Link href="/signup">Sign up</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Don&apos;t have an account?
                    </Typography>
                </Sheet>
            </main>
        </CssVarsProvider>
    );
}
