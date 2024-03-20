export function ProjectList() {
    return (
      <div>
        <h2 className="text-2xl mb-4">Prosjekter</h2>
        <ul className="pl-4 list-disc space-y-4">
            <li>
                <h3 className="text-lg">Assignment 1 - 7. april</h3>
                <p className="text-sm">Første oblig i INF115</p>
            </li>
            <li>
                <h3 className="text-lg">Mandatory 2 - 5. april</h3>
                <p className="text-sm">
                    Andre oblig i MNF130
                </p>
            </li>
        </ul>
      </div>
    )
    }