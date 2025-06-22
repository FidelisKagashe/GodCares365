import { Link } from 'react-router-dom';
import {
  HiInformationCircle,
  HiNewspaper,
  HiBookOpen,
  HiPhotograph,
  HiShoppingCart,
  HiCalendar
} from 'react-icons/hi';
export default function ChaguaKituo(){
    return(
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Chagua Kituo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Kuhusu Sisi */}
                <Link
                to="/kuhusu-sisi"
                className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
                >
                <HiInformationCircle size={48} className="text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Kuhusu Sisi</h3>
                <p className="text-gray-600">
                    Jifunze juu ya historia na malengo ya GOD CARES 365, timu yetu, na jinsi unavyoweza kushiriki nasi.
                </p>
                </Link>

                {/* Habari & Vipengele */}
                <Link
                to="/habari"
                className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
                >
                <HiNewspaper size={48} className="text-blue-800 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Habari &amp; Vipengele</h3>
                <p className="text-gray-600">
                    Soma makala za kiroho, vidokezo vya maisha, na habari mpya zinazohusiana na imani na jamii yetu.
                </p>
                </Link>

                {/* Masomo ya Biblia */}
                <Link
                to="/mafunzo"
                className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
                >
                <HiBookOpen size={48} className="text-green-700 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Masomo ya Biblia</h3>
                <p className="text-gray-600">
                    Upate masomo ya kina ya agano la kale na jipya, tafsiri za maandiko, na mipango ya kusoma Biblia.
                </p>
                </Link>

                {/* Maktaba ya Media */}
                <Link
                to="/media"
                className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
                >
                <HiPhotograph size={48} className="text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Maktaba ya Media</h3>
                <p className="text-gray-600">
                    Tazama video za mahubiri, sikia vipindi vya redio, na pakua vifaa vya kufundisha.
                </p>
                </Link>

                {/* Duka */}
                <Link
                to="/duka"
                className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
                >
                <HiShoppingCart size={48} className="text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Duka</h3>
                <p className="text-gray-600">
                    Nunua vitabu vya kiroho, T-shirt zenye ujumbe wa imani, na vifaa vingine vya kujenga roho.
                </p>
                </Link>

                {/* Matukio Maalum */}
                <Link
                to="/matukio"
                className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
                >
                <HiCalendar size={48} className="text-indigo-700 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Matukio Maalum</h3>
                <p className="text-gray-600">
                    Angalia kalenda ya mikutano ya mtandaoni, semina, na matukio ya kijamii yanayoleta kukua kiroho.
                </p>
                </Link>
            </div>
        </section>
    );
}