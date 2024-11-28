import { useEffect, useState } from "react";

const ExtraSavings = () => {
    const [saving, setSaving] = useState([]);

    useEffect(() => {
        const fetchSaving = async () => {
            try {
                const response = await fetch('/data/saving.json');
                const data = await response.json();
                setSaving(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSaving(); // Call the fetchSaving function
    }, []);

    return (
        <div>
            <div className="w-4/5 mx-auto space-y-2 text-center">
                <h3 className="text-[#E1713B] font-bold text-2xl">How To Make Extra Savings With CouponHive</h3>
                <p className="text-sm">
                    Want to spend less and shop more at the same time? CouponHive promo codes and discount offers allow you to make extra savings and
                    purchase all that you like from your favorite stores without breaking your bank.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 max-w-7xl mx-auto mt-8 mb-20">
                {
                    saving.map((saving, idx) => (
                        <div key={idx} className="card bg-base-100 shadow-xl border border-gray-200 rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
                            <div className="card-body space-y-2">
                                <div className="flex justify-center items-center mb-4">
                                    <img src={saving.icon} alt={`${saving.title} icon`} className="h-12 w-12" />
                                </div>
                                <h2 className="text-lg font-bold text-center w-full text-gray-800">{saving.title}</h2>
                                <p className="text-sm text-center w-full text-gray-600">{saving.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ExtraSavings;
