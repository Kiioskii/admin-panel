import SelectDrop from "../../../components/SelectDrop";
import { productsOptionsBySource, productsOptionsByStatus } from "../../../data/products/productsOptions";
import Search from "../../../components/ui/Search";
import { FiPrinter } from "react-icons/fi";
import BasicDateRangePicker from "../../../components/ui/BasicDateRangePicker";

const ProductsPanel = () => {
    // const { data } = useLoaderData();

    return (
        <div className=" flex-grow p-4 bg-white min-h-screen">
            <section className="h-auto w-full">
                <div className="pb-6">
                    <div className="text-start justify-normal items-center flex row-auto">
                        <p className="text-2xl font-bold mr-2">Kupione produkty</p>
                        <p className="text-xs font-semibold bg-gray-100 rounded content-center align-middle h-5 ">
                            12809
                        </p>
                    </div>
                    <div className="text-start justify-normal items-center flex row-auto gap-4">
                        <div className="flex row-auto">
                            <p className="text-base font-normal mr-1">Łączna kwota:</p>
                            <p className="text-sm font-semibold content-center ">943042 zł</p>
                        </div>
                        <div className="flex row-auto">
                            <p className="text-base font-normal mr-1">Sztuk:</p>
                            <p className="text-sm font-semibold content-center ">12823</p>
                        </div>
                    </div>
                </div>

                <div className="flex row-auto justify-between">
                    <div className=" flex row-auto gap-5">
                        <SelectDrop data={productsOptionsBySource} showIcons={true} />
                        <SelectDrop data={productsOptionsByStatus} />
                    </div>
                    <div className="flex row-auto gap-4">
                        <button className="border rounded text-gray-400 text-xl w-10 flex items-center justify-center hover:bg-gray-100">
                            <FiPrinter />
                        </button>
                        <Search />
                        <BasicDateRangePicker />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPanel;
