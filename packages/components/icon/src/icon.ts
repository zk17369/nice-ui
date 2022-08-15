import { PropType, ExtractPropTypes, Component } from 'vue';


export const iconTheme = [
    'outline',
    'filled',
    'two-tone',
    'multi-color',
] as const
export const iconStrokeLinecap = [
    'butt',
    'round',
    'square'
] as const
export const iconStrokeLinejoin = [
    'miter',
    'round',
    'bevel'
] as const

export const iconProps = {
    type: String,
    theme: {
        type: String,
        values: iconTheme,
        default: 'outline'
    },
    size: {
        type: [Number, String] as PropType<number | string>,
        default: 22
    },
    spin: Boolean,
    fill:{
        type:  [String, Array<String>] as PropType<string | Array<string>>,
    },
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
    }

} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
