"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { PiCaretDownBold, PiCheckBold } from "react-icons/pi";
import { serifStyle } from "@/lib/motion";
import { useCart } from "@/components/CartProvider";
import {
  formatCurrency,
  getCartTotals,
  type ShippingDetails,
} from "@/lib/cart";

const emptyShippingDetails: ShippingDetails = {
  name: "",
  email: "",
  phone: "",
  address: "",
  country: "",
  state: "",
  zipCode: "",
};

const countryOptions = [
  { code: "AL", label: "Albania" },
  { code: "DZ", label: "Algeria" },
  { code: "AD", label: "Andorra" },
  { code: "AO", label: "Angola" },
  { code: "AI", label: "Anguilla" },
  { code: "AG", label: "Antigua and Barbuda" },
  { code: "AR", label: "Argentina" },
  { code: "AM", label: "Armenia" },
  { code: "AU", label: "Australia" },
  { code: "AT", label: "Austria" },
  { code: "AZ", label: "Azerbaijan" },
  { code: "BS", label: "Bahamas" },
  { code: "BH", label: "Bahrain" },
  { code: "BB", label: "Barbados" },
  { code: "BE", label: "Belgium" },
  { code: "BZ", label: "Belize" },
  { code: "BJ", label: "Benin" },
  { code: "BM", label: "Bermuda" },
  { code: "BT", label: "Bhutan" },
  { code: "BO", label: "Bolivia" },
  { code: "BA", label: "Bosnia and Herzegovina" },
  { code: "BW", label: "Botswana" },
  { code: "BR", label: "Brazil" },
  { code: "BN", label: "Brunei" },
  { code: "BG", label: "Bulgaria" },
  { code: "BF", label: "Burkina Faso" },
  { code: "BI", label: "Burundi" },
  { code: "KH", label: "Cambodia" },
  { code: "CM", label: "Cameroon" },
  { code: "CA", label: "Canada" },
  { code: "CV", label: "Cape Verde" },
  { code: "KY", label: "Cayman Islands" },
  { code: "TD", label: "Chad" },
  { code: "CL", label: "Chile" },
  { code: "CN", label: "China" },
  { code: "CO", label: "Colombia" },
  { code: "KM", label: "Comoros" },
  { code: "CG", label: "Congo - Brazzaville" },
  { code: "CD", label: "Congo - Kinshasa" },
  { code: "CK", label: "Cook Islands" },
  { code: "CR", label: "Costa Rica" },
  { code: "HR", label: "Croatia" },
  { code: "CY", label: "Cyprus" },
  { code: "CZ", label: "Czech Republic" },
  { code: "DK", label: "Denmark" },
  { code: "DJ", label: "Djibouti" },
  { code: "DM", label: "Dominica" },
  { code: "DO", label: "Dominican Republic" },
  { code: "EC", label: "Ecuador" },
  { code: "EG", label: "Egypt" },
  { code: "SV", label: "El Salvador" },
  { code: "ER", label: "Eritrea" },
  { code: "EE", label: "Estonia" },
  { code: "SZ", label: "Eswatini" },
  { code: "ET", label: "Ethiopia" },
  { code: "FK", label: "Falkland Islands" },
  { code: "FO", label: "Faroe Islands" },
  { code: "FJ", label: "Fiji" },
  { code: "FI", label: "Finland" },
  { code: "FR", label: "France" },
  { code: "GA", label: "Gabon" },
  { code: "GM", label: "Gambia" },
  { code: "GE", label: "Georgia" },
  { code: "DE", label: "Germany" },
  { code: "GI", label: "Gibraltar" },
  { code: "GR", label: "Greece" },
  { code: "GL", label: "Greenland" },
  { code: "GD", label: "Grenada" },
  { code: "GT", label: "Guatemala" },
  { code: "GN", label: "Guinea" },
  { code: "GW", label: "Guinea-Bissau" },
  { code: "GY", label: "Guyana" },
  { code: "HN", label: "Honduras" },
  { code: "HK", label: "Hong Kong" },
  { code: "HU", label: "Hungary" },
  { code: "IS", label: "Iceland" },
  { code: "IN", label: "India" },
  { code: "ID", label: "Indonesia" },
  { code: "IE", label: "Ireland" },
  { code: "IL", label: "Israel" },
  { code: "IT", label: "Italy" },
  { code: "JM", label: "Jamaica" },
  { code: "JP", label: "Japan" },
  { code: "JO", label: "Jordan" },
  { code: "KZ", label: "Kazakhstan" },
  { code: "KE", label: "Kenya" },
  { code: "KI", label: "Kiribati" },
  { code: "KW", label: "Kuwait" },
  { code: "KG", label: "Kyrgyzstan" },
  { code: "LA", label: "Laos" },
  { code: "LV", label: "Latvia" },
  { code: "LS", label: "Lesotho" },
  { code: "LI", label: "Liechtenstein" },
  { code: "LT", label: "Lithuania" },
  { code: "LU", label: "Luxembourg" },
  { code: "MO", label: "Macau" },
  { code: "MG", label: "Madagascar" },
  { code: "MW", label: "Malawi" },
  { code: "MY", label: "Malaysia" },
  { code: "MV", label: "Maldives" },
  { code: "ML", label: "Mali" },
  { code: "MT", label: "Malta" },
  { code: "MH", label: "Marshall Islands" },
  { code: "MR", label: "Mauritania" },
  { code: "MU", label: "Mauritius" },
  { code: "MX", label: "Mexico" },
  { code: "FM", label: "Micronesia" },
  { code: "MD", label: "Moldova" },
  { code: "MC", label: "Monaco" },
  { code: "MN", label: "Mongolia" },
  { code: "ME", label: "Montenegro" },
  { code: "MS", label: "Montserrat" },
  { code: "MA", label: "Morocco" },
  { code: "MZ", label: "Mozambique" },
  { code: "NA", label: "Namibia" },
  { code: "NR", label: "Nauru" },
  { code: "NP", label: "Nepal" },
  { code: "NL", label: "Netherlands" },
  { code: "NZ", label: "New Zealand" },
  { code: "NI", label: "Nicaragua" },
  { code: "NE", label: "Niger" },
  { code: "NG", label: "Nigeria" },
  { code: "NU", label: "Niue" },
  { code: "NF", label: "Norfolk Island" },
  { code: "NO", label: "Norway" },
  { code: "OM", label: "Oman" },
  { code: "PW", label: "Palau" },
  { code: "PA", label: "Panama" },
  { code: "PG", label: "Papua New Guinea" },
  { code: "PY", label: "Paraguay" },
  { code: "PE", label: "Peru" },
  { code: "PH", label: "Philippines" },
  { code: "PN", label: "Pitcairn Islands" },
  { code: "PL", label: "Poland" },
  { code: "PT", label: "Portugal" },
  { code: "QA", label: "Qatar" },
  { code: "RE", label: "Reunion" },
  { code: "RO", label: "Romania" },
  { code: "RW", label: "Rwanda" },
  { code: "SH", label: "Saint Helena" },
  { code: "KN", label: "Saint Kitts and Nevis" },
  { code: "LC", label: "Saint Lucia" },
  { code: "PM", label: "Saint Pierre and Miquelon" },
  { code: "VC", label: "Saint Vincent and the Grenadines" },
  { code: "WS", label: "Samoa" },
  { code: "SM", label: "San Marino" },
  { code: "ST", label: "Sao Tome and Principe" },
  { code: "SA", label: "Saudi Arabia" },
  { code: "SN", label: "Senegal" },
  { code: "RS", label: "Serbia" },
  { code: "SC", label: "Seychelles" },
  { code: "SL", label: "Sierra Leone" },
  { code: "SG", label: "Singapore" },
  { code: "SK", label: "Slovakia" },
  { code: "SI", label: "Slovenia" },
  { code: "SB", label: "Solomon Islands" },
  { code: "SO", label: "Somalia" },
  { code: "ZA", label: "South Africa" },
  { code: "KR", label: "South Korea" },
  { code: "ES", label: "Spain" },
  { code: "LK", label: "Sri Lanka" },
  { code: "SR", label: "Suriname" },
  { code: "SJ", label: "Svalbard and Jan Mayen" },
  { code: "SE", label: "Sweden" },
  { code: "CH", label: "Switzerland" },
  { code: "TW", label: "Taiwan" },
  { code: "TJ", label: "Tajikistan" },
  { code: "TZ", label: "Tanzania" },
  { code: "TH", label: "Thailand" },
  { code: "TG", label: "Togo" },
  { code: "TO", label: "Tonga" },
  { code: "TT", label: "Trinidad and Tobago" },
  { code: "TN", label: "Tunisia" },
  { code: "TR", label: "Turkey" },
  { code: "TM", label: "Turkmenistan" },
  { code: "TC", label: "Turks and Caicos Islands" },
  { code: "TV", label: "Tuvalu" },
  { code: "UG", label: "Uganda" },
  { code: "UA", label: "Ukraine" },
  { code: "AE", label: "United Arab Emirates" },
  { code: "GB", label: "United Kingdom" },
  { code: "US", label: "United States" },
  { code: "UY", label: "Uruguay" },
  { code: "VU", label: "Vanuatu" },
  { code: "VA", label: "Vatican City" },
  { code: "VE", label: "Venezuela" },
  { code: "VN", label: "Vietnam" },
  { code: "WF", label: "Wallis and Futuna" },
  { code: "YE", label: "Yemen" },
  { code: "ZM", label: "Zambia" },
  { code: "ZW", label: "Zimbabwe" },
];

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCart();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [shippingDetails, setShippingDetails] =
    useState<ShippingDetails>(emptyShippingDetails);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const countryMenuRef = useRef<HTMLDivElement>(null);
  const { subtotal, shipping, discount, total } = getCartTotals(items);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!countryMenuRef.current?.contains(event.target as Node)) {
        setIsCountryMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleCheckout = async () => {
    if (
      !shippingDetails.name.trim() ||
      !shippingDetails.email.trim() ||
      !shippingDetails.phone.trim() ||
      !shippingDetails.address.trim() ||
      !shippingDetails.country.trim() ||
      !shippingDetails.state.trim() ||
      !shippingDetails.zipCode.trim()
    ) {
      setCheckoutError("Please complete all shipping details before checkout.");
      return;
    }

    try {
      setIsRedirecting(true);
      setCheckoutError("");

      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, shippingDetails }),
      });

      const data = (await response.json()) as {
        approvalUrl?: string;
        error?: string;
      };

      if (!response.ok || !data.approvalUrl) {
        setCheckoutError(data.error ?? "Unable to start PayPal checkout.");
        setIsRedirecting(false);
        return;
      }

      window.location.href = data.approvalUrl;
    } catch {
      setCheckoutError("Unable to connect to PayPal right now.");
      setIsRedirecting(false);
    }
  };

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[20px] font-medium tracking-tight text-[#153f48] sm:text-[28px]">
            Your Cart
          </p>
          <h1
            className="mt-2 text-[34px] leading-[0.95] sm:text-[46px] lg:text-6xl"
            style={serifStyle}
          >
            <span className="lowercase text-[#ff2eb3]">happy hoppers </span>
            <span className="lowercase font-semibold text-[#2a3ccf]">checkout corner</span>
          </h1>
          <p className="mt-5 text-[15px] text-[#2e2e2e] sm:text-[18px] lg:text-[20px]">
            Review your favorite books before heading to checkout.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {items.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-[#b5edf8] bg-[#f9feff] px-6 py-14 text-center">
                <h2
                  className="text-[32px] leading-[0.95] text-[#2a3ccf] sm:text-[40px]"
                  style={serifStyle}
                >
                  your cart is waiting
                </h2>
                <p className="mt-4 text-[16px] text-[#2e2e2e] sm:text-[18px]">
                  Add a favorite Happy Hoppers format from any book page to see it here.
                </p>
                <Link
                  href="/books"
                  className="mt-6 inline-block rounded-full bg-[#97D700] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7fb800]"
                >
                  Browse Books
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-[24px] border border-[#b5edf8] bg-[#f9feff] p-4 shadow-[0_18px_40px_rgba(90,190,220,0.12)] sm:flex-row sm:items-center sm:gap-5 sm:p-5"
                >
                  <div className="mx-auto w-full max-w-[180px] sm:mx-0 sm:max-w-[150px]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={180}
                      height={240}
                      sizes="(max-width: 640px) 180px, 150px"
                      className="h-auto w-full rounded-[18px] object-cover shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 text-center sm:text-left">
                    <div>
                      <p className="text-[13px] uppercase tracking-[0.22em] text-[#98c73a]">
                        {item.format}
                      </p>
                      <h2
                        className="mt-1 text-[28px] leading-[0.95] text-[#2832bb] sm:text-[32px]"
                        style={serifStyle}
                      >
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm text-[#153f48]">{item.bookLabel}</p>
                    </div>

                    <div className="flex flex-col gap-2 text-[#153f48] sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center justify-center gap-2 sm:justify-start">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#153f48] text-xl font-semibold text-[#153f48] transition-colors hover:bg-[#153f48] hover:text-white"
                        >
                          -
                        </button>
                        <span className="min-w-10 text-[16px] font-semibold sm:text-[18px]">
                          {String(item.quantity).padStart(2, "0")}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#153f48] text-xl font-semibold text-[#153f48] transition-colors hover:bg-[#153f48] hover:text-white"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-[26px] font-bold text-[#97D700]">{item.price}</p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={`/books/${item.slug}`}
                        className="rounded-full border border-[#153f48] px-5 py-2 text-sm font-semibold text-[#153f48] transition-colors hover:bg-[#153f48] hover:text-white"
                      >
                        View Book
                      </Link>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="rounded-full border border-[#ff9fd7] px-5 py-2 text-sm font-semibold text-[#ff2eb3] transition-colors hover:bg-[#ff2eb3] hover:text-white"
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </motion.div>

          <motion.aside
            className="rounded-[28px] border border-[#dff6fb] bg-white p-5 shadow-[0_20px_50px_rgba(42,60,207,0.08)] sm:p-6"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          >
            <p className="text-[15px] uppercase tracking-[0.2em] text-[#98c73a]">
              Order Summary
            </p>
            <h2
              className="mt-3 text-[34px] leading-[0.95] text-[#2832bb]"
              style={serifStyle}
          >
              ready to hop ahead?
            </h2>

            <div className="mt-6 space-y-4 rounded-[24px] bg-[#f9feff] p-4 sm:p-5">
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#153f48]">
                Shipping Details
              </p>

              <input
                value={shippingDetails.name}
                onChange={(event) =>
                  setShippingDetails((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                placeholder="Name"
                className="w-full rounded-[16px] border border-[#cceef6] px-4 py-3 text-sm text-[#153f48] outline-none transition-colors placeholder:text-[#7b929a] focus:border-[#2a3ccf]"
              />

              <input
                type="email"
                value={shippingDetails.email}
                onChange={(event) =>
                  setShippingDetails((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                placeholder="Email"
                className="w-full rounded-[16px] border border-[#cceef6] px-4 py-3 text-sm text-[#153f48] outline-none transition-colors placeholder:text-[#7b929a] focus:border-[#2a3ccf]"
              />

              <input
                value={shippingDetails.phone}
                onChange={(event) =>
                  setShippingDetails((current) => ({
                    ...current,
                    phone: event.target.value,
                  }))
                }
                placeholder="Phone Number"
                className="w-full rounded-[16px] border border-[#cceef6] px-4 py-3 text-sm text-[#153f48] outline-none transition-colors placeholder:text-[#7b929a] focus:border-[#2a3ccf]"
              />

              <input
                value={shippingDetails.address}
                onChange={(event) =>
                  setShippingDetails((current) => ({
                    ...current,
                    address: event.target.value,
                  }))
                }
                placeholder="Address"
                className="w-full rounded-[16px] border border-[#cceef6] px-4 py-3 text-sm text-[#153f48] outline-none transition-colors placeholder:text-[#7b929a] focus:border-[#2a3ccf]"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div ref={countryMenuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsCountryMenuOpen((current) => !current)}
                    className="flex w-full items-center justify-between rounded-[16px] border border-[#cceef6] bg-white px-4 py-3 text-sm text-[#153f48] outline-none transition-all duration-200 hover:border-[#89d7ea] hover:shadow-[0_10px_24px_rgba(42,60,207,0.08)] focus:border-[#2a3ccf] focus:shadow-[0_10px_24px_rgba(42,60,207,0.12)]"
                  >
                    <span className={shippingDetails.country ? "" : "text-[#7b929a]"}>
                      {countryOptions.find(
                        (country) => country.code === shippingDetails.country,
                      )?.label ?? "Select Country"}
                    </span>
                    <PiCaretDownBold
                      className={`text-base text-[#2a3ccf] transition-transform duration-200 ${
                        isCountryMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={
                      isCountryMenuOpen
                        ? { opacity: 1, y: 8, pointerEvents: "auto" }
                        : { opacity: 0, y: 0, pointerEvents: "none" }
                    }
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-[18px] border border-[#cceef6] bg-white shadow-[0_20px_40px_rgba(42,60,207,0.12)]"
                  >
                    <div
                      className="max-h-64 overflow-y-auto py-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#9ab2bb] hover:[&::-webkit-scrollbar-thumb]:bg-[#7d98a2]"
                      style={{ scrollbarWidth: "thin", scrollbarColor: "#9ab2bb transparent" }}
                    >
                      {countryOptions.map((country) => {
                        const isSelected = shippingDetails.country === country.code;

                        return (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setShippingDetails((current) => ({
                                ...current,
                                country: country.code,
                              }));
                              setIsCountryMenuOpen(false);
                            }}
                            className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors duration-150 ${
                              isSelected
                                ? "bg-[#2a3ccf] text-white"
                                : "text-[#153f48] hover:bg-[#eef9fd]"
                            }`}
                          >
                            <span>{country.label}</span>
                            {isSelected ? <PiCheckBold className="text-sm" /> : null}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>

                <input
                  value={shippingDetails.state}
                  onChange={(event) =>
                    setShippingDetails((current) => ({
                      ...current,
                      state: event.target.value,
                    }))
                  }
                  placeholder="State"
                  className="w-full rounded-[16px] border border-[#cceef6] px-4 py-3 text-sm text-[#153f48] outline-none transition-colors placeholder:text-[#7b929a] focus:border-[#2a3ccf]"
                />
              </div>

              <input
                value={shippingDetails.zipCode}
                onChange={(event) =>
                  setShippingDetails((current) => ({
                    ...current,
                    zipCode: event.target.value,
                  }))
                }
                placeholder="Zip Code"
                className="w-full rounded-[16px] border border-[#cceef6] px-4 py-3 text-sm text-[#153f48] outline-none transition-colors placeholder:text-[#7b929a] focus:border-[#2a3ccf]"
              />
            </div>

            <div className="mt-6 space-y-4">
              {[
                { label: "Subtotal", value: formatCurrency(subtotal) },
                { label: "Shipping", value: formatCurrency(shipping) },
                { label: "Discount", value: `-${formatCurrency(discount)}` },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between border-b border-[#eef8fb] pb-3 text-[16px] text-[#153f48]"
                >
                  <span>{row.label}</span>
                  <span className="font-semibold">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-[20px] font-bold text-[#153f48]">
              <span>Total</span>
              <span className="text-[30px] text-[#ff2eb3]">{formatCurrency(total)}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={items.length === 0 || isRedirecting}
              className="mt-6 w-full rounded-full bg-[#97D700] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#7fb800] disabled:cursor-not-allowed disabled:bg-[#b8d68c]"
            >
              {isRedirecting ? "Redirecting to PayPal..." : "Proceed to Checkout"}
            </button>

            {checkoutError ? (
              <p className="mt-4 text-center text-sm text-[#d12d7a]">{checkoutError}</p>
            ) : null}

            <Link
              href="/books"
              className="mt-4 block text-center text-sm font-semibold text-[#2a3ccf] underline-offset-4 hover:underline"
            >
              Continue shopping
            </Link>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;
