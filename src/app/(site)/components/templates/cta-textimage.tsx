import Image from "next/image";
import Styles from "./cta-textimage.module.css";
import HeaderSection from "./header-section";

interface Props {
    image: string;
    altText: string;
    blurData: string;
    content: string;
    reverseColumn: boolean;
    backgroundStyles: any;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    textAlign: string;
    paddingTop: string;
    paddingBottom: string;
    imageWidth: number;
    containerBorder: boolean;
    enableImageBorder: boolean;
    columnLayout: string; // Added property for column layout
}

export default function CalltoActionTextImage({
    image,
    altText,
    blurData,
    content,
    reverseColumn,
    backgroundStyles,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonText,
    secondaryButtonLink,
    secondaryButtonStyle,
    paddingTop,
    paddingBottom,
    textAlign,
    imageWidth,
    containerBorder,
    enableImageBorder,
    columnLayout, // Added property for column layout
}: Props) {
    const getColumnLayoutClasses = () => {
        switch (columnLayout) {
            case "half":
                return "lg:w-1/2";
            case "twoFifths":
                return "lg:w-2/5";
            case "oneThird":
                return "lg:w-1/3";
            case "oneFifth":
                return "lg:w-1/5";
            default:
                return "lg:w-1/2";
        }
    };

    const getSecondColumnLayoutClasses = () => {
        switch (columnLayout) {
            case "half":
                return "lg:w-1/2";
            case "twoFifths":
                return "lg:w-3/5";
            case "oneThird":
                return "lg:w-2/3";
            case "oneFifth":
                return "lg:w-4/5";
            default:
                return "lg:w-1/2";
        }
    };

    const styles = {
        paddingTop: paddingTop ?? "5rem",
        paddingBottom: paddingBottom ?? "5rem",
        marginRight: '5px',
        marginLeft: '5px',
    };

    const allStyles = { ...backgroundStyles, ...styles };

    return (
        <div style={allStyles}>
            <div className={`container ${containerBorder && 'border-2 border-[#bd8f80] py-10'}`}>
                <div className={`${Styles.ctaTextImageWrapper} space-y-10 ${reverseColumn ? "flex-row-reverse" : ""}`}>
                    {image && (
                        <div className={`${getColumnLayoutClasses()}`}>
                            <div className={`${enableImageBorder && 'border-[#bb9788] border-2 rounded-xl p-4'}`}>
                                <Image
                                    src={image}
                                    alt={altText}
                                    placeholder={blurData ? "blur" : "empty"}
                                    blurDataURL={blurData}
                                    width={imageWidth ? imageWidth : 1824}
                                    height={1080}
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    )}
                    <div className={`${getSecondColumnLayoutClasses()}`}>
                        {(content || primaryButtonLink || secondaryButtonLink) && (
                            <HeaderSection
                                content={content}
                                textAlign={textAlign}
                                // PRIMARY
                                buttonLink={primaryButtonLink}
                                primaryButtonText={primaryButtonText}
                                primaryButtonStyle={primaryButtonStyle}
                                // SECONDARY
                                secondaryButtonLink={secondaryButtonLink}
                                secondaryButtonText={secondaryButtonText}
                                secondaryButtonStyle={secondaryButtonStyle}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}