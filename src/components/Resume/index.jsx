import './style.scss';
import resume from '../../assets/CURRICULUM VITAE - Gustavo.pdf'

export const Resume = () => {
    return (
        <>
            <section class="page-section bg-dark text-white">
                <div class="container px-4 px-lg-5 text-center">
                    <h2 class="mb-4">My Resume</h2>
                    <a class="btn btn-light btn-xl" href={resume}>Donwload .PDF</a>
                </div>
            </section>
        </>
    )
}