import * as React from 'react';
import { useContext,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import UserContext from '../context/Users/UserContext';

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function OrderSummary() {


    const context = useContext(UserContext);
    let { setprogress } = context;
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





    return (
        <Container maxWidth="md" sx={{ height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

            <div className='text-4xl mb-4 font-semibold  '>Order Summary</div>

            <TableContainer component={Paper} >

                <Table sx={{ minWidth: 700 }} aria-label="spanning table" >
                    <TableHead  >
                        <TableRow>
                            <TableCell align="center" colSpan={3} sx={{ color: 'Black', fontSize: 20, fontFamily: 'sans-serif' }}>
                                Details
                            </TableCell>
                            <TableCell align="right" sx={{ color: 'Black', fontSize: 20, fontFamily: 'sans-serif' }} > Price</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ color: 'Black', fontSize: 20, fontFamily: 'sans-serif' }} >Desc</TableCell>
                            <TableCell align="right" sx={{ color: 'Black', fontSize: 20, fontFamily: 'sans-serif' }} >Qty.</TableCell>
                            <TableCell align="right" sx={{ color: 'Black', fontSize: 20, fontFamily: 'sans-serif' }} >Unit</TableCell>
                            <TableCell align="right" sx={{ color: 'Black', fontSize: 20, fontFamily: 'sans-serif' }} >Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.desc}>
                                <TableCell sx={{ color: 'Black', fontSize: 18, fontFamily: 'sans-serif' }} >{row.desc}</TableCell>
                                <TableCell align="right" sx={{ color: 'Black', fontSize: 15, fontFamily: 'sans-serif' }} >{row.qty}</TableCell>
                                <TableCell align="right" sx={{ color: 'Black', fontSize: 15, fontFamily: 'sans-serif' }}>{row.unit}</TableCell>
                                <TableCell align="right" sx={{ color: 'Black', fontSize: 15, fontFamily: 'sans-serif' }}>{ccyFormat(row.price)}</TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2} sx={{ color: 'Black', fontSize: 15, fontFamily: 'sans-serif' }} >Subtotal</TableCell>
                            <TableCell align="right" sx={{ color: 'Black', fontSize: 15, fontFamily: 'sans-serif' }}>{ccyFormat(invoiceSubtotal)}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ color: 'Black', fontSize: 15, fontFamily: 'sans-serif' }}>Tax</TableCell>
                            <TableCell align="right" sx={{ color: 'Black', fontSize: 15, fontFamily: 'sans-serif' }}>{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right" sx={{ color: 'Black', fontSize: 15, fontFamily: 'sans-serif' }}>{ccyFormat(invoiceTaxes)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2} sx={{ color: 'Black', fontSize: 15, fontFamily: 'sans-serif' }}>Total</TableCell>
                            <TableCell align="right" sx={{ color: 'Black', fontSize: 15, fontFamily: 'sans-serif' }}>{ccyFormat(invoiceTotal)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="container mt-4 border-green-600 text-center">
                <Button variant="contained" color="secondary" sx={{ paddingY: 1, paddingX: 3 }}>Pay Now</Button>
                <Button variant="contained" color="secondary" sx={{ paddingY: 1, paddingX: 3, marginX: 6 }}>Cancel Order</Button>
            </div>


        </Container >
    );
}
