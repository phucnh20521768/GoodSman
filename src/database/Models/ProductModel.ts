import 'firebase/firestore/lite'
import { DocumentData, QueryDocumentSnapshot, WithFieldValue } from 'firebase/firestore/lite';

export class ProductModel {
    constructor(
        readonly id: string,
        readonly productName: string,
        readonly images: [],
        readonly cateogry: string,
        readonly price: number,
        readonly isTrending: boolean,
        readonly shortDesc: string,
        readonly description: object,
        readonly avgRating: number,
        readonly reviews: []) { }

    static postConverter = {
        toFirestore(product: WithFieldValue<ProductModel>): DocumentData {
            return {
                id: this.id,
                productName: this.productName,
                images: this.images,
                category: this.category,
                price: this.price,
                isTrending: this.isTrending,
                shortDesc: this.shortDesc,
                description: this.description,
                reviews: this.reviews,
                avgRating: this.avgRating,
            }
        },
        fromFirestore(
            snapshot: QueryDocumentSnapshot,
            options
        ): ProductModel {
            const data = snapshot.data()!;
            return new ProductModel(data.id,
                data.productName,
                data.images,
                data.category,
                data.price,
                data.isTrending,
                data.shortDesc,
                data.description,
                data.avgRating,
                data.reviews);
        }
    }
}

