import React, { useState } from 'react'
import { firebaseFirestore } from './InstanceFiresbase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
import { async } from '@firebase/util'

function UseGetData(collectionName) {

    const [data, setData] = useState([])
    const collectionRef = collection(firebaseFirestore, collectionName)

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collectionRef)
            setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }

        getData()
    }, [collectionRef]);
    return { data }
}

export default UseGetData