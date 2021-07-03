import React from 'react'

const SidePanel = () => {

    const portal_options = [
        { id: 1, name: "MOM Nodes", url: "/mom_nodes" },
        { id: 2, name: "File Manager", url: "/file_manager"  },
        { id: 3, name: "Job Submit", url: "/job_submit"  }

    ]

    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        {portal_options.map((each_options) => (
                            <a key={each_options.id}  className="nav-link" href={each_options.url}>
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                {each_options.name}
                            </a>
                        ))}
                    </div>
                    {/* <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default SidePanel
