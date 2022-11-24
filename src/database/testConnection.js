//it is test

import { firebaseFirestore, firebaseStorage } from './InstanceFiresbase.js'
import { collection, getDocs } from 'firebase/firestore/lite'
import { async } from '@firebase/util'
import { ProductModel } from './Models/ProductModel.ts'

export async function Test() {
    const mCollection = collection(firebaseFirestore, '/products').withConverter(ProductModel.postConverter)
    const mSnapshot = await getDocs(mCollection)
    const mDocs = mSnapshot.docs.map(doc => doc.data())
    console.log(mDocs)
}