interface Props {
    title: string;
    description?: string;
}

export default function SectionTitle({
    title,
    description,
}: Props) {

    return (

        <div className="mb-14 text-center">

            <h2 className="section-title">
                {title}
            </h2>

            {description && (

                <p className="section-description">
                    {description}
                </p>

            )}

        </div>

    )

}