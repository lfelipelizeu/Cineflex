export default function BuyerData ({ buyerName, buyerCpf, setBuyerName, setBuyerCpf }) {
    return (
        <div className="buyer-data">
            Nome do comprador:
            <input type="text" placeholder="Digite seu nome..." value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />

            CPF do comprador:
            <input type="text" placeholder="Digite seu CPF..." value={buyerCpf} onChange={(e) => setBuyerCpf(e.target.value)} />
        </div>
    );
}