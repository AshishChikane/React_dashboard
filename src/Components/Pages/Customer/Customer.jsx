import HeaderNav from "../../../Comman/Navbar/HeaderNav";
import Aside from '../../../Comman/Aside/Aside'

export default function Customer(){
    return (
        <>
         <HeaderNav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 col-sm-2 bg-dark d-flex felx-column justify-content-between min-vh-100" style={{ paddingLeft: '50px' }}>
                        <div className="mt-2" role='button'>
                            <Aside />
                        </div>
                    </div>
                    <div className="col-8">
                        <h1 className='' style={{ paddingLeft: '400px', }}>Customer</h1>
                    </div>
                </div>
            </div>
        </>
    )
}