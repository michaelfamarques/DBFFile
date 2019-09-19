/** Metadata describing a single field in a DBF file. */
export interface FieldDescriptor {
    /** The name of the field. Must be no longer than 10 characters. */
    name: string;
    /**
     * The single-letter code for the field type.
     * C=string, N=numeric, F=float, I=integer, L=logical, D=date, M=memo.
     */
    type: 'C' | 'N' | 'F' | 'L' | 'D' | 'I' | 'M';
    /** The size of the field in bytes. */
    size: number;
    /** The number of decimal places. Optional; only used for some field types. */
    decimalPlaces?: number;
}
export declare function validateFieldDescriptor(field: FieldDescriptor): void;
