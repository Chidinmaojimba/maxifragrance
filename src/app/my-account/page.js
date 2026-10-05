"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/my-account.module.css";

const wishlistItems = [
  {
    name: "Éclat de Rose",
    category: "Floral & Fruité",
    price: "₦165,000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHhyOq2WgLHQzuqL_D_pS67ywp4jadPQ9VXCTwMxIM4gUpBdaztFLE_l1l-OQoG8bCFoSTCBz1KuoL4djSXuJsvyFIsFZ1EUxeOXCfdv4ZeeQnjuTgNmYEUuWNkFaKWGeS8_z80GUlbG5LcBIc1SmqiDIDjVHySSWNzoO9PufBYFYBKrZP0UWh5eLNrNlxd5FJFJR-TTIgl6WZ0Hpim8zfi0Da5baSik9uYyNu6qfIF2YlHbcNayWGa-auVHk47GYmNSWbrZXKH1it",
  },
  {
    name: "Cèdre Argenté",
    category: "Boisé & Musqué",
    price: "₦145,000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDMn-lkJ7eTy27Ii-pEl0o7h2hhpoSrK4VFXdbYeoLTjolKI4TYF9tq2xO3MX8RwUzc1hrSiD-dABzPaCqXHTFf_ylL0GYyHXtm4N8_GWRBFDncPrT_tAM3b9WgejTZ0qLkzTIuUTODCud3hIeSsN7jzQJ1UJ03P0HEx1wnYKzpkVnN1C0TY3qSfTKG2pbjUx_XxyRXWys-EgD75V_tHokDav68rrhnfLLPGxzwuxJ1Hv_W6tbREEy7J0YlmTK7TRf8mujs8ifGg3t",
  },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (["profile", "orders", "wishlist", "addresses"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const switchTab = (tab) => {
    setActiveTab(tab);

    window.history.replaceState(null, "", `#${tab}`);

    if (window.innerWidth < 768) {
      document
        .getElementById("account-content")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <main className="account-main">
        <div className="account-container">
          {/* SIDEBAR */}
          <aside className="account-sidebar">
            <div className="sidebar-sticky">
              <h2>Mon Espace</h2>

              <nav className="sidebar-navigation">
                <button
                  className={
                    activeTab === "profile"
                      ? "sidebar-item active"
                      : "sidebar-item"
                  }
                  onClick={() => switchTab("profile")}
                >
                  <span>◉</span>
                  <span>Personal Profile</span>
                </button>

                <button
                  className={
                    activeTab === "orders"
                      ? "sidebar-item active"
                      : "sidebar-item"
                  }
                  onClick={() => switchTab("orders")}
                >
                  <span>🛒</span>
                  <span>Order History</span>
                </button>

                <button
                  className={
                    activeTab === "wishlist"
                      ? "sidebar-item active"
                      : "sidebar-item"
                  }
                  onClick={() => switchTab("wishlist")}
                >
                  <span>♡</span>
                  <span>Wishlist</span>
                </button>

                <button
                  className={
                    activeTab === "addresses"
                      ? "sidebar-item active"
                      : "sidebar-item"
                  }
                  onClick={() => switchTab("addresses")}
                >
                  <span>⌖</span>
                  <span>Saved Addresses</span>
                </button>

                <div className="sidebar-divider" />

                <button className="sidebar-item logout">
                  <span>↪</span>
                  <span>Se déconnecter</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* CONTENT */}
          <section className="account-content" id="account-content">
            {/* PROFILE */}
            {activeTab === "profile" && (
              <section className="tab-section">
                <header className="section-header">
                  <h1>Profil Personnel</h1>

                  <p>Gérez vos informations personnelles et vos préférences.</p>
                </header>

                <div className="profile-card">
                  <div className="profile-column">
                    <div className="form-group">
                      <label>Prénom</label>

                      <input type="text" defaultValue="Julian" />
                    </div>

                    <div className="form-group">
                      <label>Nom de famille</label>

                      <input type="text" defaultValue="D'Artois" />
                    </div>

                    <div className="form-group">
                      <label>Email</label>

                      <input
                        type="email"
                        defaultValue="julian.dartois@luxe.com"
                      />
                    </div>
                  </div>

                  <div className="profile-column">
                    <div className="form-group">
                      <label>Téléphone</label>

                      <input type="tel" defaultValue="+33 6 12 34 56 78" />
                    </div>

                    <div className="form-group">
                      <label>Date de naissance</label>

                      <input type="text" defaultValue="14 / 09 / 1988" />
                    </div>

                    <div className="save-container">
                      <button className="primary-button">
                        Enregistrer les modifications
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ORDERS */}
            {activeTab === "orders" && (
              <section className="tab-section">
                <header className="section-header">
                  <h1>Historique des Commandes</h1>

                  <p>Suivez vos achats récents et consultez vos factures.</p>
                </header>

                <div className="orders-list">
                  <OrderCard
                    date="12 Octobre 2023"
                    total="₦245,000"
                    orderNumber="MF-98231"
                    status="En cours d'expédition"
                    statusType="shipping"
                    product="Oud Immortel"
                    description="Eau de Parfum - 100ml"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAanG5bo6kUOwIEeF0r3GLD94YtPhNXvBt2yI3OT0_VbsYdIXLYi9SfcYpWn6yR1-DoioW93IbBLJnfKUNrToq5Nd__1gFC2XvH0HnxzLWntR1zXkgtRq5DoyfgUf8RbofyS3MmdRdstWxL5QQyOnKxNMEceeUlgbQKhjZVW_KNwLxbKXt9jceLNkbEG7gvAn9TtikWzk74JJHvd6nRhXrRC1FHT10ILsI-_QvonUPkiBidBV66VIc4K3P0VqRbAfFRVXqwdvhGLGYk"
                  />

                  <OrderCard
                    date="28 Août 2023"
                    total="₦190,000"
                    orderNumber="MF-91044"
                    status="Livré"
                    statusType="delivered"
                    product="Noir Absolu"
                    description="Extrait de Parfum - 50ml"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCfJ8DbGuYsZ9QuTnOhYXDP4naVTQNu0gC0jhrI-hkqDKXcu_TaDEc01ZW4tlcnSyz0z96be2ljZQO4HS84b0e2Sw6DNoKKFUurlG7iob6pUOrEeLrIwAFILrToB3vc_iEApzuzAgj9adoiM9f3kA5vZr1UMpfK_iEl5djTQ-8cZoVzhTJZc8Dg7AY7cB8ze3uIxfAlzlpzyz4ewxxyf0ebYjjNIcRpL2Y3x1LNkgBQCQHx-VLwXxbLYJalYmNBiXTfiwENBaC48o_v"
                  />
                </div>
              </section>
            )}

            {/* WISHLIST */}
            {activeTab === "wishlist" && (
              <section className="tab-section">
                <header className="section-header">
                  <h1>Ma Liste d'Envies</h1>

                  <p>
                    Les fragrances qui vous ont séduites, conservées pour plus
                    tard.
                  </p>
                </header>

                <div className="wishlist-grid">
                  {wishlistItems.map((item, index) => (
                    <div className="wishlist-card" key={index}>
                      <div className="wishlist-image-container">
                        <img src={item.image} alt={item.name} />

                        <button className="delete-button">×</button>

                        <button className="add-cart-button">
                          AJOUTER AU PANIER
                        </button>
                      </div>

                      <div className="wishlist-info">
                        <span>{item.category}</span>

                        <h3>{item.name}</h3>

                        <p>{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ADDRESSES */}
            {activeTab === "addresses" && (
              <section className="tab-section">
                <header className="section-header address-header">
                  <div>
                    <h1>Adresses Enregistrées</h1>

                    <p>
                      Vos adresses de livraison et de facturation préférées.
                    </p>
                  </div>

                  <button className="primary-button">
                    ＋ NOUVELLE ADRESSE
                  </button>
                </header>

                <div className="addresses-grid">
                  <AddressCard
                    title="Maison"
                    primary
                    name="Julian D'Artois"
                    address="24 Avenue Montaigne"
                    city="75008 Paris"
                    country="France"
                    phone="+33 6 12 34 56 78"
                  />

                  <AddressCard
                    title="Bureau"
                    name="Julian D'Artois"
                    address="12 Rue de la Paix"
                    city="75002 Paris"
                    country="France"
                    phone="+33 1 45 67 89 00"
                  />
                </div>
              </section>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

function OrderCard({
  date,
  total,
  orderNumber,
  status,
  statusType,
  product,
  description,
  image,
}) {
  return (
    <div className="order-card">
      <div className="order-top">
        <div className="order-details">
          <div>
            <span>DATE</span>
            <strong>{date}</strong>
          </div>

          <div>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </div>

          <div>
            <span>COMMANDE #</span>
            <strong>{orderNumber}</strong>
          </div>
        </div>

        <div className="order-status">
          <span className={`status ${statusType}`}>{status}</span>

          <a href="#">
            {statusType === "shipping" ? "Suivre le colis" : "Facture PDF"}
          </a>
        </div>
      </div>

      <div className="order-product">
        <div className="order-image">
          <img src={image} alt={product} />
        </div>

        <div className="order-product-info">
          <h3>{product}</h3>

          <p>{description}</p>

          <small>Qté: 1</small>
        </div>

        <button className="secondary-button">Recommander</button>
      </div>
    </div>
  );
}

function AddressCard({ title, primary, name, address, city, country, phone }) {
  return (
    <div className={primary ? "address-card primary-address" : "address-card"}>
      {primary && <span className="default-badge">Par défaut</span>}

      <h3>{title}</h3>

      <p>
        {name}
        <br />
        {address}
        <br />
        {city}
        <br />
        {country}
        <br />

        <span className="phone">{phone}</span>
      </p>

      <div className="address-actions">
        <button>Modifier</button>
        <button>Supprimer</button>
      </div>
    </div>
  );
}
