export const getPremiersTitles = (premiers) => (
    premiers.map(premiere => `${premiere.title} (${premiere.premiereDate.split('-')[0]})`)
)

export const getPremiersImages = (premiers) => (
    premiers.map(premiere => ({
        image: {
            uri: premiere.image.uri
        }
    }))
)

export const getPremiersPremieresDates = (premiers) => (
    premiers.map(premiere => `Premiere Date: ${premiere.premiereDate}`)
)

export const getPremiersIds = (premiers) => (
    premiers.map(premiere => premiere.id)
)