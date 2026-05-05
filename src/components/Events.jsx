import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useIdiom } from '../hooks/useIdiom';
import '../index.css';

function Events() {
    const idiom = useIdiom();

    const events = [
        {
            id: 'HackaTime 2024',
            title: 'Hackatime',
            year: 2024,
            placement: 1,
            descPt:
                'Hackathon patrocinado pela Sicredi Caminho das Águas, focado no desenvolvimento de um MVP durante 48h.',
            descEn:
                'Hackathon sponsored by Sicredi Caminho das Águas, building on developing an MVP within 48 hours.',
            links: [
                {
                    href: 'https://www2.faccat.br/portal/?q=hackatime_taquara',
                    icon: 'bi-box-arrow-up-right',
                    labelPt: 'Saiba Mais',
                    labelEn: 'Learn More',
                },
            ],
            badgePT: 'Hackathon',
            badgeEN: 'Hackathon',
        },
        {
            id: 'Feintec2025',
            title: 'Feintec - Feira de Inovação e Tecnologia',
            year: 2025,
            placement: 2,
            descPt:
                'Feira Científica organizada pela Escola Técnica Estadual Monteiro Lobato, voltada à apresentação de projetos acadêmicos e tecnológicos.',
            descEn:
                'Science fair organized by Escola Técnica Estadual Monteiro Lobato, focused on showcasing academic and technological projects.',
            links: [
                {
                    href: 'https://www.instagram.com/p/DQ-x-9JETXs/',
                    icon: 'bi-instagram',
                    labelPt: 'Veja no Instagram',
                    labelEn: 'See on Instagram',
                },
            ],
            badgePT: 'Feira Científica',
            badgeEN: 'Science Fair',
        },
        {
            id: 'Hackatime 2025',
            title: 'Hackatime',
            year: 2025,
            placement: null,
            mention: true,
            descPt:
                'Segunda edição do Hackathon patrocinado pela Sicredi Caminho das Águas, mais uma vez focado no desenvolvimento de um MVP durante 48h.',
            descEn:
                'Second edition of the Hackathon sponsored by Sicredi Caminho das Águas, once again focused on building an MVP in just 48 hours.',
            links: [
                {
                    href: 'https://www.sicredi.com.br/coop/caminhodasaguasrs/noticias/inovacao/hackatime-taquara-2025-reune-jovens-estudantes-para-encontrar-solucoes-inovadoras/',
                    icon: 'bi-box-arrow-up-right',
                    labelPt: 'Saiba Mais',
                    labelEn: 'Learn More',
                },
            ],
            badgePT: 'Hackathon',
            badgeEN: 'Hackathon',
        },
        {
            id: 'Taquara Summit 2024',
            title: 'Taquara Summit',
            year: 2024,
            placement: null,
            descPt:
                'O maior evento de inovação e tecnologia do Vale do Paranhanam, trazendo novamente palestras, workshops e networking com profissionais.',
            descEn:
                'The largest innovation and technology event in Vale do Paranhana, once again featuring lectures, workshops, and networking with industry professionals.',
            links: [
                {
                    href: 'https://www.taquara.rs.gov.br/noticia/13178?titulo=Taquara+Summit+2024+é+amanhã%3A+Conheça+os+destaques+da+programação%21',
                    icon: 'bi-box-arrow-up-right',
                    labelPt: 'Saiba Mais',
                    labelEn: 'Learn More',
                },
            ],
            badgePT: 'Evento',
            badgeEN: 'Event',
        },
        {
            id: 'Taquara Summit 2025',
            title: 'Taquara Summit',
            year: 2025,
            placement: null,
            descPt:
                'Segunda edição do maior evento de inovação e tecnologia do Vale do Paranhana. Palestras, workshops e networking com profissionais.',
            descEn:
                'Second edition of the largest innovation and technology event in Vale do Paranhana. Lectures, workshops, and networking with professionals.',
            links: [
                {
                    href: 'https://www.taquara.rs.gov.br/noticia/13890/13890?titulo=Grandes+nomes+estarão+no+Taquara+Summit+2025+falando+de+inovação%2C+empreendedorismo+e+networking',
                    icon: 'bi-box-arrow-up-right',
                    labelPt: 'Saiba Mais',
                    labelEn: 'Learn More',
                },
            ],
            badgePT: 'Evento',
            badgeEN: 'Event',
        },
        {
            id: 'Oktober Summit 2025',
            title: 'Oktober Summit',
            year: 2025,
            placement: null,
            descPt:
                'Evento de tecnologia e inovação realizado em Igrejinha/RS, reunindo palestras e workshops.',
            descEn:
                'Technology and innovation event held in Igrejinha/RS, featuring lectures and workshops.',
            links: [
                {
                    href: 'https://www.instagram.com/oktobersummit/',
                    icon: 'bi-instagram',
                    labelPt: 'Veja no Instagram',
                    labelEn: 'See on Instagram',
                },
            ],
            badgePT: 'Evento',
            badgeEN: 'Event',
        },
    ];

    const getPlacementBadge = (placement) => {
        switch (placement) {
            case 1:
                return { label: idiom === 'en' ? '1st place' : '1º lugar', className: 'bg-warning text-dark' };
            case 2:
                return { label: idiom === 'en' ? '2nd place' : '2º lugar', className: 'bg-secondary' };
            case 3:
                return { label: idiom === 'en' ? '3rd place' : '3º lugar', className: 'bg-bronze text-dark' };
            default:
                return null;
        }
    };

    const getMentionBadge = (mention) => {
        if (!mention) return null;
        return {
            label: idiom === 'en' ? 'Honorable Mention' : 'Menção Honrosa',
            className: 'bg-info text-dark',
        };
    };

    const getBadgeLabel = (e) => {
        if (idiom === 'en') {
            return e.badgeEN
        }
        else {
            return e.badgePT
        }
    };

    return (
        <section
            className="container my-5 px-3 px-md-4"
            id="Events"
            style={{ paddingTop: '10rem', paddingBottom: '10rem' }}
        >
            <h3 className="fw-bold mb-4">
                {idiom === 'en' ? 'Participation and Awards' : 'Participações e Premiações'}
            </h3>

            <div className="row g-4">
                {events.map((e) => {
                    const placementInfo = getPlacementBadge(e.placement);
                    const mentionInfo = getMentionBadge(e.mention);

                    return (
                        <div className="col-12 col-md-6 col-lg-4" key={e.id}>
                            <article className="project-card h-100 d-flex flex-column">
                                {/* Header */}
                                <div className="project-card__header d-flex align-items-center justify-content-between">
                                    <span className="project-badge">{getBadgeLabel(e)}</span>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="badge">{e.year}</span>

                                        {/* Premiação */}
                                        {placementInfo && (
                                            <span className={`badge d-inline-flex align-items-center gap-1 ${placementInfo.className}`}>
                                                <i className="bi bi-trophy-fill" />
                                                {placementInfo.label}
                                            </span>
                                        )}

                                        {/* Menção honrosa */}
                                        {!placementInfo && mentionInfo && (
                                            <span className={`badge d-inline-flex align-items-center gap-1 ${mentionInfo.className}`}>
                                                <i className="bi bi-star-fill" />
                                                {mentionInfo.label}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="project-card__body mt-2">
                                    <h5 className="project-title">{e.title}</h5>
                                    <p className="project-desc">
                                        {idiom === 'en' ? e.descEn : e.descPt}
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="project-card__footer mt-auto d-flex flex-wrap gap-2">
                                    {(e.links ?? []).map((l, idx) => (
                                        <a
                                            key={`${e.id}-${idx}`}
                                            href={l.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-ghost d-inline-flex align-items-center gap-2 mt-4"
                                        >
                                            <i className={`bi ${l.icon}`} />
                                            {idiom === 'en' ? l.labelEn : l.labelPt}
                                        </a>
                                    ))}
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Events;
