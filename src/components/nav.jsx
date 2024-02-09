const menuitems = [
    { name: "HOME", url: "/" },
    { name: "GAMES", url: "/games" }
]

const menu = menuitems.map((items) =>
    <div className="menu-item">
        <a href={items.url}><h1>{items.name}</h1></a>
    </div>
)

export default function Header() {
    return (
        <div className="header">
            {menu}
        </div>
    )
}