import { defineType } from "sanity";
import { colorOptions, paddingBottom, paddingTop, primaryButton, secondaryButton, textAlign } from "../lib/classes";

export default defineType({
    title: 'Call to Action',
    name: 'ctaSection',
    type: 'object',
    groups: [
        { title: 'Content', name: 'content' },
        { title: 'Settings', name: 'settings' },
    ],
    fields: [
        {
            title: "Layout Type",
            name: "layoutType",
            type: "string",
            options: {
                list: [
                    { title: "Banner", value: "banner" },
                    { title: "Text and Image", value: "textAndImage" },
                    { title: "Left Text with Right Buttons", value: "ButtonRightTextLeft" },
                    { title: "Full Width Text & Image", value: "fullWidthTextImage" },
                    { title: "Text and Youtube", value: "textAndYoutube" },
                    { title: "Custom", value: "custom" },
                ],
            },
            initialValue: "banner"
        },
        {
            title: "Column Layout",
            name: "columnLayout",
            type: "string",
            hidden: ({ parent }) => parent?.layoutType !== 'textAndYoutube' && parent?.layoutType !== "textAndImage",
            options: {
                list: [
                    { title: "1/2 Columns", value: "half" },
                    { title: "2/5 and 3/5", value: "twoFifths" },
                    { title: "1/3 and 2/3", value: "oneThird" },
                    { title: "1/5 and 4/5", value: "oneFifth" },
                ],
            },
            initialValue: "half"
        },
        {
            title: 'Text One',
            name: 'textOne',
            type: 'string',
            hidden: ({ parent }) => parent.layoutType !== 'custom'
        },
        {
            title: 'Text Two',
            name: 'textTwo',
            type: 'string',
            hidden: ({ parent }) => parent.layoutType !== 'custom'
        },
        {
            title: 'Enable Container Border',
            name: 'enableContainerBorder',
            type: 'boolean'
        },
        {
            title: 'Enable Image Border',
            name: 'enableImageBorder',
            type: 'boolean'
        },
        {
            title: 'Text',
            name: 'content',
            type: 'contentEditor',
            group: 'content',
        },
        {
            title: 'Text Align',
            name: 'textAlign',
            type: 'string',
            options: {
                list: textAlign
            },
            initialValue: "text-center mx-auto justify-center"
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            hidden: ({ parent }) => parent?.layoutType === "banner" || parent?.layoutType === "ButtonRightTextLeft" || parent?.layoutType === 'textAndYoutube'
        },
        {
            title: 'Youtube Link',
            name: 'youtube',
            type: 'url',
            hidden: ({ parent }) => parent?.layoutType !== 'textAndYoutube'
        },
        {
            title: 'Reverse Column',
            name: 'reverseColumn',
            type: 'boolean',
            hidden: ({ parent }) => parent?.layoutType === "banner" || parent?.layoutType === "ButtonRightTextLeft"
        },
        primaryButton,
        secondaryButton,
        colorOptions,
        paddingTop,
        paddingBottom,
    ],
    preview: {
        select: {
            content: 'content',
        },
        prepare({ content }) {
            const hasContent = content && content[0]?.children?.length > 0;

            return {
                title: hasContent ? content[0].children[0].text : 'Call to Action',
            };
        },
    },
})