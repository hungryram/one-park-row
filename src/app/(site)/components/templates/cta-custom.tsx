
interface Props {
    content: string;
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
    textOne: string;
    textTwo: string;
}

export default function CallToActionCustom({
    backgroundStyles,
    textOne,
    textTwo,
    paddingTop,
    paddingBottom
}: Props) {

    const styles = {
        paddingTop: paddingTop ?? '5rem',
        paddingBottom: paddingBottom ?? '5rem',
    }

    const allStyles = { ...backgroundStyles, ...styles }

    return (
        <div style={allStyles}>
            <div className="container">
                <div className="md:flex content">
                    <div className="md:w-auto">
                        <h2 className="md:!text-6xl">{textOne}</h2>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="md:!text-6xl md:pt-20 md:text-right">{textTwo}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
