export function ProjectList() {
    return (
        <div>
            <h2 className="text-2xl mb-4">Prosjekter</h2>
            <ul className="pl-4 list-disc space-y-4">
                <li>
                    <h3 className="text-lg">INF115 - Assignment 1</h3>
                    <p className="text-sm">Første oblig i INF115. Frist 7. april</p>
                </li>
                <li>
                    <h3 className="text-lg">MNF130 - Mandatory 2</h3>
                    <p className="text-sm">Andre oblig i MNF130. Frist 5. april</p>
                </li>
            </ul>
        </div>
    )
}