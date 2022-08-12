import { PropType, ExtractPropTypes, Component } from 'vue';


export const iconTheme = [
    'outline',
    'filled',
    'two-tone',
    'multi-color',
] as const
export const iconStrokeLinecap = [
    'outline',
    'filled',
    'two-tone',
    'multi-color',
] as const
export const iconStrokeLinejoin = [
    'outline',
    'filled',
    'two-tone',
    'multi-color',
] as const
export const iconStrokeWidth = [
    'outline',
    'filled',
    'two-tone',
    'multi-color',
] as const


export const iconProps = {
    type: String,
    theme: {
        type: String,
        values: iconTheme,
        default: 'outline'
    },
    size: [Number, String] as PropType<number | string>,
    spin: Boolean,
    fill: String,
    strokeLinecap: {
        type: String,
        values: iconStrokeLinecap,
        default: 'round'
    },
    strokeLinejoin: {
        type: String,
        values: iconStrokeLinejoin,
        default: 'round'
    },
    strokeWidth: {
        type: Number,
        default: 4
    },

    color: String,

} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
