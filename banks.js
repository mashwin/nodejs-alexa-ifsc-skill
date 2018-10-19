
const arrBanks = [
    'ZILA SAHAKRI BANK LIMITED GHAZIABAD',
    'THE ZOROASTRIAN COOPERATIVE BANK LIMITED',
    'YES BANK',
    'WESTPAC BANKING CORPORATION',
    'THE WEST BENGAL STATE COOPERATIVE BANK',
    'VASAI VIKAS SAHAKARI BANK LTD',
    'VASAI VIKAS SAHAKARI BANK LIMITED',
    'THE VISHWESHWAR SAHAKARI BANK LIMITED',
    'VIJAYA BANK',
    'THE VARACHHA COOPERATIVE BANK LIMITED',
    'UTKARSH SMALL FINANCE BANK',
    'UNITED BANK OF INDIA',
    'UNITED OVERSEAS BANK LIMITED',
    'Ujjivan Small Finance Bank Limited',
    'UCO BANK',
    'UNION BANK OF INDIA',
    'TEXTILE TRADERS CO OPERATIVE BANK LTD',
    'TEXTILE TRADERS CO - OPERATIVE BANK LIMITED',
    'TELANGANA STATE COOP APEX BANK',
    'THE TAMIL NADU STATE APEX COOPERATIVE BANK',
    'TAMILNAD MERCANTILE BANK LIMITED',
    'TJSB SAHAKARI BANK LIMITED',
    'TJSB SAHAKARI BANK LTD',
    'TUMKUR GRAIN MERCHANTS COOPERATIVE BANK LIMITED',
    'THE THANE DISTRICT CENTRAL COOPERATIVE BANK LIMITED',
    'THE THANE BHARAT SAHAKARI BANK LIMITED',
    'SYNDICATE BANK',
    'THE SHAMRAO VITHAL COOPERATIVE BANK',
    'THE SEVA VIKAS COOPERATIVE BANK LIMITED',
    'SUTEX COOPERATIVE BANK LIMITED',
    'SURYODAY SMALL FINANCE BANK LIMITED',
    'SURAT NATIONAL COOPERATIVE BANK LIMITED',
    'SBM BANK MAURITIUS LIMITED',
    'SARASWAT COOPERATIVE BANK LIMITED',
    'THE SURATH PEOPLES COOPERATIVE BANK LIMITED',
    'SOCIETE GENERALE',
    'SHIVALIK MERCANTILE CO OPERATIVE BANK LTD',
    'SUMITOMO MITSUI BANKING CORPORATION',
    'SHIKSHAK SAHAKARI BANK LIMITED',
    'SOLAPUR JANATA SAHAKARI BANK LIMITED',
    'THE SINDHUDURG DISTRICT CENTRAL COOP BANK LTD',
    'SOUTH INDIAN BANK',
    'SHINHAN BANK',
    'THE SURAT DISTRICT COOPERATIVE BANK LIMITED',
    'SAMARTH SAHAKARI BANK LTD',
    'STANDARD CHARTERED BANK',
    'STATE BANK OF INDIA',
    'SAHEBRAO DESHMUKH COOPERATIVE BANK LIMITED',
    'SBER BANK',
    'THE RAJASTHAN STATE COOPERATIVE BANK LIMITED',
    'RAJGURUNAGAR SAHAKARI BANK LIMITED',
    'RAJKOT NAGRIK SAHAKARI BANK LIMITED',
    'IDRBT',
    'RESERVE BANK OF INDIA , PAD',
    'RBL Bank Limited',
    'RABOBANK INTERNATIONAL',
    'QATAR NATIONAL BANK SAQ',
    'PAYTM PAYMENTS BANK LTD',
    'PUNJAB NATIONAL BANK',
    'THE PANDHARPUR URBAN CO OP.BANK LTD.PANDHARPUR',
    'PUNJAB AND SIND BANK',
    'PRATHAMA BANK',
    'PRIME COOPERATIVE BANK LIMITED',
    'PUNJAB AND MAHARSHTRA COOPERATIVE BANK',
    'PRAGATHI KRISHNA GRAMIN BANK',
    'G P PARSIK BANK',
    'ORIENTAL BANK OF COMMERCE',
    'THE NAVNIRMAN CO - OPERATIVE BANK LIMITED',
    'NAGAR URBAN CO OPERATIVE BANK',
    'THE NAINITAL BANK LIMITED',
    'THE BANK OF NOVA SCOTIA',
    'NUTAN NAGARIK SAHAKARI BANK LIMITED',
    'THE NASIK MERCHANTS COOPERATIVE BANK LIMITED',
    'NKGSB COOPERATIVE BANK LIMITED',
    'NEW INDIA COOPERATIVE BANK LIMITED',
    'NAGPUR NAGARIK SAHAKARI BANK LIMITED',
    'NORTH EAST SMALL FINANCE BANK LIMITED',
    'FIRST ABU DHABI BANK PJSC',
    'NATIONAL AUSTRALIA BANK LIMITED',
    'THE MUNICIPAL COOPERATIVE BANK LIMITED',
    'THE MEHSANA URBAN COOPERATIVE BANK',
    'MASHREQBANK PSC',
    'MAHARASHTRA STATE COOPERATIVE BANK',
    'MIZUHO BANK LTD',
    'THE MUMBAI DISTRICT CENTRAL COOPERATIVE BANK LIMITED',
    'MAHANAGAR COOPERATIVE BANK',
    'Maharashtra Gramin Bank',
    'BANK OF MAHARASHTRA',
    'LAXMI VILAS BANK',
    'KARNATAKA VIKAS GRAMEENA BANK',
    'KARUR VYSYA BANK',
    'THE KARAD URBAN COOPERATIVE BANK LIMITED',
    'THE KARANATAKA STATE COOPERATIVE APEX BANK LIMITED',
    'KEB Hana Bank',
    'THE KURMANCHAL NAGAR SAHAKARI BANK LIMITED',
    'KERALA GRAMIN BANK',
    'KOTAK MAHINDRA BANK LIMITED',
    'KALYAN JANATA SAHAKARI BANK',
    'KOZHIKODE DISTRICT COOPERATIAVE BANK LTD',
    'KALUPUR COMMERCIAL COOPERATIVE BANK',
    'KARNATAKA BANK LIMITED',
    'THE KANGRA COOPERATIVE BANK LIMITED',
    'KALLAPPANNA AWADE ICHALKARANJI JANATA SAHAKARI BANK LIMITED',
    'THE KANGRA CENTRAL COOPERATIVE BANK LIMITED',
    'JANATA SAHAKARI BANK LIMITED',
    'JANAKALYAN SAHAKARI BANK LIMITED',
    'THE JALGAON PEOPELS COOPERATIVE BANK LIMITED',
    'JALGAON JANATA SAHAKARI BANK LIMITED',
    'JANASEVA SAHAKARI BANK BORIVLI LIMITED',
    'JANASEVA SAHAKARI BANK LIMITED',
    'JAMMU AND KASHMIR BANK LIMITED',
    'INDIAN OVERSEAS BANK',
    'INDUSIND BANK',
    'IDUKKI DISTRICT CO OPERATIVE BANK LTD',
    'INDIAN BANK',
    'IDFC BANK LIMITED',
    'ICICI BANK LIMITED',
    'INDUSTRIAL AND COMMERCIAL BANK OF CHINA LIMITED',
    'INDUSTRIAL BANK OF KOREA',
    'IDBI BANK',
    'PT BANK MAYBANK INDONESIA TBK',
    'WOORI BANK',
    'HSBC BANK',
    'HIMACHAL PRADESH STATE COOPERATIVE BANK LTD',
    'HDFC BANK',
    'THE HASTI COOP BANK LTD',
    'HARYANA STATE COOPERATIVE BANK',
    'THE GUJARAT STATE COOPERATIVE BANK LIMITED',
    'THE GADCHIROLI DISTRICT CENTRAL COOPERATIVE BANK LIMITED',
    'THE GREATER BOMBAY COOPERATIVE BANK LIMITED',
    'FINCARE SMALL FINANCE BANK LTD',
    'FIRSTRAND BANK LIMITED',
    'FINO PAYMENTS BANK',
    'FEDERAL BANK',
    'ESAF SMALL FINANCE BANK LIMITED',
    'EQUITAS SMALL FINANCE BANK LIMITED',
    'EXPORT IMPORT BANK OF INDIA',
    'EMIRATES NBD BANK P J S C',
    'DOHA BANK',
    'DOHA BANK QSC',
    'DOMBIVLI NAGARI SAHAKARI BANK LIMITED',
    'DHANALAKSHMI BANK',
    'THE DELHI STATE COOPERATIVE BANK LIMITED',
    'DEPOSIT INSURANCE AND CREDIT GUARANTEE CORPORATION',
    'DEUSTCHE BANK',
    'DEOGIRI NAGARI SAHAKARI BANK LTD.AURANGABAD',
    'DCB BANK LIMITED',
    'DEVELOPMENT BANK OF SINGAPORE',
    'CHINATRUST COMMERCIAL BANK LIMITED',
    'CATHOLIC SYRIAN BANK LIMITED',
    'SHRI CHHATRAPATI RAJASHRI SHAHU URBAN COOPERATIVE BANK LIMITED',
    'CREDIT AGRICOLE CORPORATE AND INVESTMENT BANK CALYON BANK',
    'CREDIT SUISEE AG',
    'THE COSMOS CO OPERATIVE BANK LIMITED',
    'CORPORATION BANK',
    'CANARA BANK',
    'CAPITAL SMALL FINANCE BANK LIMITED',
    'CITY UNION BANK LIMITED',
    'JP MORGAN BANK',
    'CITIZEN CREDIT COOPERATIVE BANK LIMITED',
    'CENTRAL BANK OF INDIA',
    'BANK OF TOKYO MITSUBISHI LIMITED',
    'BANK OF AMERICA',
    'B N P PARIBAS',
    'BANK OF INDIA',
    'DENA BANK',
    'BANDHAN BANK LIMITED',
    'BANK OF CEYLON',
    'BHARAT COOPERATIVE BANK MUMBAI LIMITED',
    'BANK OF BAHARAIN AND KUWAIT BSC',
    'BARCLAYS BANK',
    'BANK OF BARODA',
    'THE BARAMATI SAHAKARI BANK LTD',
    'BASSEIN CATHOLIC COOPERATIVE BANK LIMITED',
    'ALMORA URBAN COOPERATIVE BANK LIMITED',
    'AU SMALL FINANCE BANK LIMITED',
    'APNA SAHAKARI BANK LIMITED',
    'THE A.P.MAHESH COOPERATIVE URBAN BANK LIMITED',
    'ANDHRA PRAGATHI GRAMEENA BANK',
    'THE ANDHRA PRADESH STATE COOPERATIVE BANK LIMITED',
    'AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED',
    'ANDHRA BANK',
    'AHMEDABAD MERCANTILE COOPERATIVE BANK',
    'ALLAHABAD BANK',
    'AKOLA JANATA COMMERCIAL COOPERATIVE BANK',
    'AIRTEL PAYMENTS BANK LIMITED',
    'THE AKOLA DISTRICT CENTRAL COOPERATIVE BANK',
    'ABU DHABI COMMERCIAL BANK',
    'THE ROYAL BANK OF SCOTLAND N V',
    'ABHYUDAYA COOPERATIVE BANK LIMITED',
    'AXIS BANK',
    'CITI BANK',
    'ICICI BANK LIMITED'
];

module.exports = {
    arrBanks
}