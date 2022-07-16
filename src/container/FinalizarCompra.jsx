import React from 'react'
import { useState } from 'react';
import { useCartContext } from "../context/CartContext";
import { useEffect } from 'react';
import Select from 'react-select';
import { Spinner } from "react-bootstrap";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config'
import Redirect from "react-router-dom";

export default function FinalizarCompra() {
    const { user,loginStatus, resumen,setCart } = useCartContext();
    const [loading, setLoading] = useState(true)
    const [focused, setFocused] = useState(false);
    const [direccion, setDireccion] = useState()
    const [comuna, setComuna] = useState()
    const [resumenFinal, setResumenFinal] = useState([])
    const [estado, setEstado] = useState(false)
    const onFocus = () => setFocused(true);
    const logged =()=>{
        if(loginStatus===false){
          setLoading(false)
        }else{
          setLoading(true)
        }
      }
    const getDireccion = (event) => {
        setDireccion(event.target.value)

    }
    const getComuna = (event) => {
        setComuna(event.value)
    }
    useEffect(()=>{
        logged()
    }, [loginStatus])

    const comunas = [
        { value: 'Curicó', label: 'Curicó' },
        { value: 'Santiago', label: 'Santiago' },
        { value: 'Rancagua', label: 'Rancagua' }
    ]

    const terminarCompra = () => {
        let [{ email, NombreCliente }] = user
        const resumenFin = {user:{NombreCliente, email, direccion, comuna},items: resumen }
        setResumenFinal(resumenFin)
        setEstado(true)
        alert('Su compra fue realizada con éxito')
        setCart([])


    }

    useEffect(() => {
        subirData()

    }, [estado])



    const subirData = async (e) => {
        console.log("estado: "+estado)
        if (estado == true) {
            try {
                await addDoc(collection(db, 'compras'), {
                    ...resumenFinal
                })
            } catch (e) {
                console.log(e)
            }
        } else {
            console.log(e)
            console.log(resumenFinal)
        }
    }


    return (
        <div>
          <h1 className='text-center mt-4'>Finalizar la compra</h1>
          {
          loading
          ? <Spinner animation="border" role="status">
          </Spinner>
          :
          <div className='d-flex justify-content-center m-5 vertical-align-middle'>
          <ul>
            <li className='m-2'style={{listStyle:"none"}}>Email: </li>
            <li className='m-2'style={{listStyle:"none"}}>Nombre: </li>
            <li className='m-2'style={{listStyle:"none"}}>Dirección: </li>
            <li className='m-2'style={{listStyle:"none"}}>Comuna: </li>
          </ul>
          <ul>
            <li style={{listStyle:"none"}}><input className="form-control" disabled type="text" defaultValue={user[0].email}></input></li>
            <li style={{listStyle:"none"}}><input className="form-control" disabled type="text"  defaultValue={user[0].NombreCliente} ></input></li>
            <li className='m-1' style={{listStyle:"none"}}><input type="text" onChange={getDireccion}  className="address-user text-center" placeholder='Ingresa tu dirección' onFocus={onFocus}></input></li>
            <li className='m-1' style={{listStyle:"none"}}><Select type="text" onChange={getComuna} options={comunas} className="address-user text-center" placeholder='Ingresa tu comuna'></Select></li>
          </ul>
    
          <button className='pagarbtn btn btn-primary' style={{height:"2em"}} onClick={terminarCompra}>Pagar</button>
          </div>
    
    
          }
    
    
        </div>
      )
}