import 'firebase/firestore/lite'
import { DocumentData, QueryDocumentSnapshot, WithFieldValue } from 'firebase/firestore/lite';

export class ProductModel {
    constructor(readonly name_product: string, readonly price: number, readonly images: [], readonly description: object) { }

    static postConverter = {
        toFirestore(product: WithFieldValue<ProductModel>): DocumentData {
            return {
                name_product: this.name_product,
                price: this.price,
                images: this.images,
                description: this.description
                // description: {
                //     content: "",
                //     head: ""
                // }
            }
        },
        fromFirestore(
            snapshot: QueryDocumentSnapshot,
            options
        ): ProductModel {
            const data = snapshot.data()!;
            return new ProductModel(data.name_product, data.price, data.images, data.description);
        }
    }
}

