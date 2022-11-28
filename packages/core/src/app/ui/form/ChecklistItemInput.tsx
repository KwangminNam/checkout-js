import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import Input from './Input';
import Label from './Label';


export interface ChecklistItemInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isSelected: boolean;
    value: any;
}


const ChecklistItemInput: FunctionComponent<ChecklistItemInputProps> = ({
    id,
    isSelected,
    children,
    value,
    ...props
}) => {


    // let index = findIndex(cart!.lineItems.physicalItems, { sku: "COD1" });
    // const cartId = cart.id;
    // // const testt = cart.lineItems.digitalItems;


    // const _updateShippingCostTotal = () => {
    //     return new Promise(async (resolve, reject) => {
    //         const arrConsignments = consignments.map(consignment => {
    //             return {
    //                 consignmentId: consignment.id,
    //                 selectedShippingOptionId: (consignment.selectedShippingOption ? consignment.selectedShippingOption.id : null)
    //             }
    //         })
    //         for (let i = 0; i < arrConsignments.length; i++) {
    //             const consignmentId = arrConsignments[i].consignmentId
    //             const shippingOptionId = arrConsignments[i].selectedShippingOptionId

    //             // if (!shippingOptionId) return

    //             await fetch(`/api/storefront/checkouts/${cart.id}/consignments/${consignmentId}?include=consignments.availableShippingOptions%2Ccart.lineItems.physicalItems.options%2Ccart.lineItems.digitalItems.options%2Ccustomer%2Cpromotions.banners`, {
    //                 method: 'PUT',
    //                 credentials: 'same-origin',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     shippingOptionId
    //                 })
    //             }).then(resp => {
    //                 return resp.json()
    //             })
    //                 .catch(err => {
    //                     console.log(err);
    //                     reject(true);
    //                 });
    //         }
    //         resolve(true)
    //     })
    // }

    // control modal 
    // const [modal, setModal] = useState<boolean>(false)
    // const closeModal = () => { setModal(false); }
    // cod function
    // useEffect(() => {
    //     // cod 메소드 선택시 add product
    //     if (value === 'cod' && isSelected === true && index === -1 || index === null || index === undefined) {
    //         setModal(true);
    //         fetch('/cart.php?action=add&sku=COD1&qty=1').then(res => {
    //             console.log(res);
    //             _updateShippingCostTotal().then(data => {
    //                 console.log(data);
    //                 loadCheckout(cartId, {
    //                     params: {
    //                         include: [
    //                             'cart.lineItems.physicalItems.categoryNames',
    //                             'cart.lineItems.digitalItems.categoryNames',
    //                         ] as any,
    //                     },
    //                 });
    //             })
    //         })
    //     }
    //     // 상품없으면 그냥 return 처리 
    //     if (index === -1 || index === undefined || index === null) {
    //         return;
    //     }
    //     // Remove COD FEE pruduct
    //     if (value !== 'cod' && isSelected === true) {
    //         const cartId = cart.id;
    //         const itemId = cart.lineItems.physicalItems[index].id!;
    //         fetch(`/api/storefront/carts/${cartId}/items/${itemId}`, {
    //             method: "DELETE",
    //             credentials: "same-origin",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //             .then(response => {
    //                 console.log(response);
    //                 _updateShippingCostTotal().then(data => {
    //                     console.log(data);
    //                     loadCheckout(cartId, {
    //                         params: {
    //                             include: [
    //                                 'cart.lineItems.physicalItems.categoryNames',
    //                                 'cart.lineItems.digitalItems.categoryNames',
    //                             ] as any,
    //                         },
    //                     });
    //                 })
    //             })
    //     }
    // }, [isSelected]);

    // Remvoe the FEE product when a customer select \
    // useEffect(() => {
    //     let index = findIndex(cart.lineItems.physicalItems, { sku: "COD1" });

    //     if (index === -1 || index === undefined || index === null) {
    //         return
    //     }
    //     if (value !== 'cod' && isSelected === true) {
    //         const cartId = cart.id;
    //         const itemId = cart.lineItems.physicalItems[index].id!;
    //         fetch(`/api/storefront/carts/${cartId}/items/${itemId}`, {
    //             method: "DELETE",
    //             credentials: "same-origin",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //             .then(response => {
    //                 console.log(response);
    //                 _updateShippingCostTotal().then(data => {
    //                     console.log(data);
    //                     loadCheckout(cartId, {
    //                         params: {
    //                             include: [
    //                                 'cart.lineItems.physicalItems.categoryNames',
    //                                 'cart.lineItems.digitalItems.categoryNames',
    //                             ] as any,
    //                         },
    //                     });
    //                 })
    //             })
    //     }
    // }, [isSelected])

    // const FIXED_SHIPPING = "f1e9925ae999e32667d42758cc82cbae";
    // const FREE_SHIPPING = "4dcbf24f457dd67d5f89bcf374e0bc9b";

    // console.log(value);

    // if (value === FIXED_SHIPPING || value === FREE_SHIPPING) {
    //     isSelected = true;
    // }

    return (
        <>
            <Input
                {...props}
                checked={isSelected}
                className="form-checklist-checkbox optimizedCheckout-form-checklist-checkbox"
                id={id}
                type="radio"
                value={value}
            />
            <Label htmlFor={id}>{children}</Label>
        </>
    );
}


export default ChecklistItemInput;

