import Receipt from "../model/Receipt";

interface EntranceOperatorGateway {
    fetch_receipt_by(name: string): Promise<Receipt>;
    publish_receipt_number(name: string, ip: string, number: string): Promise<Receipt>;
    is_number_duplicated(number: string): Promise<boolean>;
}

export default EntranceOperatorGateway;
