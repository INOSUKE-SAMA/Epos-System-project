import { BsCashCoin } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { BsCreditCard } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

const CurrentOrder = () => {
    const orderItems = [
        { name: "Crunchy Veg CheeseBurger", quantity: 1, price: 180 },
        { name: "Crunchy Chicken CheeseBurger", quantity: 1, price: 200 },
        { name: "Crunchy Veg CheeseBurger", quantity: 1, price: 180 },
    ];

    const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="bg-white shadow-md p-4 w-96">
            <h2 className="text-lg font-bold mb-4 text-blue-700">Current Order</h2>
            <table className="w-full text-xs border border-light-gray mb-8">
                <thead className="bg-blue-700 text-white">
                    <tr>
                        <th className="p-2 border border-light-gray">S.N.</th>
                        <th className="p-2 border border-light-gray">Items Added</th>
                        <th className="p-2 border border-light-gray">Qty</th>
                        <th className="p-2 border border-light-gray">Price</th>
                        <th className="p-2 border border-light-gray">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orderItems.map((item, index) => (
                        <tr key={index} className="border-b border-light-gray">
                            <td className="p-2 border border-light-gray">{index + 1}</td>
                            <td className="p-2 border border-light-gray">{item.name}</td>
                            <td className="p-2 flex justify-center items-center">
                                <button className="w-6 h-6 flex justify-center items-center rounded-full bg-gray-300 text-base">-</button>
                                <span className="mx-2">{item.quantity}</span>
                                <button className="w-6 h-6 flex justify-center items-center rounded-full bg-blue-600 text-white text-base">+</button>
                            </td>
                            <td className="p-2 border border-light-gray">{item.price}</td>
                            <td className="p-2 flex justify-center items-center">
                                <button className="text-black">
                                    <RiDeleteBinLine className="text-base" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                <div className="flex justify-between border border-black p-2 rounded">
                    <span className="font-semibold">Subtotal</span>
                    <span>{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border border-black p-2 mt-2 rounded font-bold text-lg">
                    <span>Total</span>
                    <span>{subtotal.toFixed(2)}</span>
                </div>
            </div>

            <h3 className="mt-6 font-semibold">Payment Method</h3>
            <div className="flex space-x-4 mt-2">
                <button className="border rounded-lg px-4 py-1 w-full flex items-center justify-center text-sm text-blue-700">
                    <BsCashCoin className="mr-2 text-blue-700 text-lg" />
                    Cash
                </button>
                <button className="border rounded-lg px-4 py-1 w-full bg-blue-600 text-white flex items-center justify-center text-sm">
                    <BsCreditCard className="mr-2 text-white text-lg" />
                    Debit Card
                </button>
                <button className="border rounded-lg px-4 py-1 w-full flex items-center justify-center text-sm text-blue-700">
                    <CiWallet className="mr-2 text-blue-700 text-lg" />
                    E-Wallet
                </button>
            </div>

            <button className="bg-green-500 text-white font-bold rounded-lg mt-10 w-full py-2">
                Place Order
            </button>
        </div>
    );
};

export default CurrentOrder;
