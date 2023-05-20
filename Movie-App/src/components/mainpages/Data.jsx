import React, { useEffect, useState } from 'react'

const APIKEY = "9196bd2"

const Data = () => {

    const [loading, setLoading] = useState(true);
    const [money, setMoney] = useState('');
    const [honest, setHonest] = useState('');
    const [game, setGame] = useState('');
    const [power, setPower] = useState('');
    const [scratch, setScratch] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=Money+heist&apikey=${APIKEY}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`This is an HTTP Error: the status is ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            setMoney(data)
            setError(null)
        })
        .catch((error) => {
            setError(error)
            setMoney(null)
        })
        .finally(() => setLoading(false))
    }, [])


    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=Honest+thief&apikey=${APIKEY}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`This is an HTTP Error: the status is ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            setHonest(data)
            setError(null)
        })
        .catch((error) => {
            setError(error)
            setHonest(null)
        })
        .finally(() => setLoading(false))
    }, [])

    

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=Game+of+Thrones&apikey=${APIKEY}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`This is an HTTP Error: the status is ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            setGame(data)
            setError(null)
        })
        .catch((error) => {
            setError(error)
            setGame(null)
        })
        .finally(() => setLoading(false))
    }, [])


    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=power&apikey=${APIKEY}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`This is an HTTP Error: the status is ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            setPower(data)
            setError(null)
        })
        .catch((error) => {
            setError(error)
            setPower(null)
        })
        .finally(() => setLoading(false))
    }, [])

    

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=from+scratch&apikey=${APIKEY}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`This is an HTTP Error: the status is ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            setScratch(data)
            setError(null)
        })
        .catch((error) => {
            setError(error)
            setScratch(null)
        })
        .finally(() => setLoading(false))
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default Data;