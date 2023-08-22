export const API = 'https://api.admeta.network/'

export const ADMETA_MSG_ACCOUNT = 'ADMETA_MSG_ACCOUNT'
export const ADMETA_MSG_AD_PUSH = 'ADMETA_MSG_AD_PUSH'
export const ADMETA_MSG_DOMAIN = 'ADMETA_MSG_DOMAIN'
export const ADMETA_MSG_SWITCH = 'ADMETA_MSG_SWITCH'
export const ADMETA_MSG_NFT_PUSH = 'ADMETA_MSG_NFT_PUSH'
export const ADMETA_MSG_NFT_CLAIM = 'ADMETA_MSG_NFT_CLAIM'
export const ADMETA_MSG_EVM = 'ADMETA_MSG_EVM'
export const ADMETA_MSG_EXTENISON_CALL_ADDRESS = 'ADMETA_MSG_EXTENISON_CALL_ADDRESS'
export const ADMETA_MSG_SYNCDATA_TO_CONTENT = 'ADMETA_MSG_SYNCDATA_TO_CONTENT'

export const DOMAIN_CONFIG_URL = 'https://raw.githubusercontent.com/AdMetaNetwork/web3-product-categorized-list/main/web3-product-list.json'

// export const LINK_HTTP = 'http://localhost:3000/'
export const LINK_HTTP = 'https://app.admeta.network/'

export const TEST_ACCOUNT = 'frozen captain slender cat multiply small okay cruise stone virus aim learn'
export const CONTRACT_ADDRESS = '0x34Efa1dEDd98afC37A2C5674Cfb73994058Ec20F'
export const RPC = 'https://eth-sepolia-public.unifra.io'
// browser 2 minutes report
export const REPORTING_TIME = 1000 * 10
// open tabs number
export const OPEN_TAB_NUMBER = 7

export const NFT_RECOMMOND = [
  {
    icon: 'https://i.seadn.io/gcs/files/8b2f89f94a33ffe2a12bac420e953c16.png?auto=format&w=384',
    name: 'soulda16club',
    link: 'https://opensea.io/zh-CN/collection/soulda16club'
  },
  {
    icon: 'https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&w=384',
    name: 'cryptopunks',
    link: 'https://opensea.io/zh-CN/collection/cryptopunks'
  },
  {
    icon: 'https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=384',
    name: 'boredapeyachtclub',
    link: 'https://opensea.io/zh-CN/collection/boredapeyachtclub'
  },
  {
    icon: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=384',
    name: 'azuki',
    link: 'https://opensea.io/zh-CN/collection/azuki'
  },
  {
    icon: 'https://i.seadn.io/gae/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75?auto=format&w=384',
    name: 'proof-moonbirds',
    link: 'https://opensea.io/zh-CN/collection/proof-moonbirds'
  },
  {
    icon: 'https://i.seadn.io/gae/mZZpy1L0umW_XniBCeZNX92HncdlMsGLqlEYzsZ4t986HyF7Z1TwYPJ7sJb7VjQqxWwdTOlkr7Au-fQHTcxDB6AxM6VOY8AzzOyMzw?auto=format&w=384',
    name: 'mimicshhans',
    link: 'https://opensea.io/zh-CN/collection/mimicshhans'
  }
]

export const POW_IMG_BASE64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAYCAYAAABa3SD0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA8rSURBVHgB7VxfaGRXGf/OnTS720qbFUGk4N4oQpFCsu1LW9DcrChFpJ1FCgpiJn0oW3xIgg/iSzPpi/hisgWpIDQTEOpL2Vn1RR/MzUPRvrhZ/2AV2r1FBKHFTKxm/t/j991zzsw3Z869M5NM9g+dH3v23nv+//2d7/vOmQBMMMEEE0wwwQQTfNQgYIIJ7gAKwcFMGyDvfy4HX3j6PhaSAyllJc7F+1Fw1kcPP8dCJUBlGiBcPi8qcJcD2zGDj7zlXRbi7q/77cKEgCa47fjG0we+1xS7QooLuErhkbkp8dhTXRJCLxCCnqLwj0v3+fi9jotZqOkq6V/UkGJx7VMigrsYWGcfH7cs70UkoBDuIWA7Astrf1wkOqULmMfHfEqcaNgCdUXn0M1qL+r8m2kdjvFpd5jRn1TG/oA4kSsvVxw9+AFko5OfrrufFg9S+mBA3xmEmDZy1JWjouuzDyMiI0+T774pPyVNdJIxGhmxtxt7cEFI4hkBf/1TC87cL+Czn58ypZqYW2d/BbOHl2Q+Vn2sWEjSOMlt/F6ECU4Veh3tWt7U7yGMAWbEaZKtQ3ZFtvCxkbIIA50+SEkb4WPZMcmp3CX9XqI4juQ00cwCoLLPO+JQ2YYE1kB1jq/TZqEE3Y4ssLo4kdIHA/sOVLtK+n0FMohR91Woy4lgOGTmqfMt42ON5Un9ZepdwfBZe2z1uF5jXrNwQjz31f8U4lhcQBYRUibSDBAJ/flmCz756RxMTZvC0Qk5My0bm9UjD+vt7SbsI3WgEMEP3m6vfP+R3FWY4J6FN0LcVeidjAlwEtHkJ4YMMtL6FAfj2gs1ZO+BI2/y4zv7jGZkHofC51PyHDecfTBm+KDIcFdLV+NCXudp+pPI1BAO+a060vDxKo1AiO4K5A/8WHjrKP2IthAy9jyQ6GJPQL0F8Pe321BvANTr0H02ZeETYQuaNRE2jqRo1CTUa0I2aiCbNSgWb8gZmOCehYuAroPa6chdBCVRGAQ4gZ81H1o832LhEaiJvKjdsvYzKOo0BmX27rPFYeBagPmMOGkqTAjdNnG3Bm7sQLcN5DZYGPVBmqR0PaWcckp83leXdbmRDvPheCS0Bunj54MiN9DSDpceVnj/O1TYDTgp4jMrcU74bSScOJcQj2znSCPzEjIiAqocSqgh+XQcklCjDuvtqlhuVmWlXpXQqEpRP4oFvs80j1qrx60OtZc2RXS3ZBc3zPji85oOM27LkQfNBxqnA5bHwHGj/rXyJjfvyI/8t/nGm1HvFccaGtReU98lR3wSLHYdWXX6xYpPrqDzMzgw9Ud32Wrvu1OOzA+snW5fN35FfxMBXNfvmyweWfcvO/IrYfoSdNUbqgzZRCrk8J0IwwzWAsub8KwjvznrO2DvIaRgxN3btokYm9ISK3PHke5gxHJs+1hZdnVuetJkoj4exdZRcYwf9ash7s4ExXhFPfF87U/9bdpVZHmMQfqp+qh0rcoYda8cmZhRm4rRDE0mHTIwy+Rd/OWPbXj04lRiiGYIHnyztvCvx6e3MHmRVLCOORrES9/blaUfLo5WP6ufOWgu0pwt6G8e/pCVB0mIRehHgO4G9BK8C771vQn9mgDFKaDLY3k0DyoZ9SaCXKV4Dpvfkg6fSakvEV8RlJE8YmX7jvgzdj7JGAK8putqxyU/mn87Vn5yWBWM2wZ8XWABuplFkC5NEFahV9wvsLA99m4vtEA/91l6WwJaYO9pksY4ELF3H04JevB5P9DECGB8qFjfXLIp0n8W2dpxjoVWLi6i6oWSjxCkciUqWA4EfpMfSPRHB/9GCej991HNanBH6pgoiqixg6rXQYOkoBpAswqCpKGjansbRkAG+XAEkG2rK4CbfDhWYDQEGWG0boxE4mfEo7Ce/pBK6yhB+kEFT7srLTPHIEi1WxAZFzKiUdl9/TEsAfns/aZ+cukkzNohtbjPJYaAvXPS6Eg31qIjqcioVrYdiIu6nMzGDZ+934RThO7LkHkFcAxokTuALmnTOJStskrA1D4dv8iinFj6efq5aqHt5b7dFqRqIfkQ6aAdSBEREPlAh5S8nHzn3ZgIR5L6RWpYvUnv0j9zy1tC0lkj8iFVrF7DeGgLatTi4Mq1ZjBClYrgXsQ0x0LoJ2kXXAcPFZ0+hOMjObVMyYMWsW+VFTni2ZvWpqMMks5IMLAleR+6bUurh/EPNfnMQnZ/RJACFwH5Wo8zjhiX74YlVlGDYRY+t83MWf5mwOeZDsslnRB6VbMkTCo928QPM64KBNIBSMcFqXRxcnlLhSRspaQrOIrZheOB9+kFGB7brH0H0NXhI+gVrzmW2TtN1iWW5sTSj5zy1knCSSQetPdIJBv0gzbZfpB8lE2I/EgKAlFre6VaK35F2YCErNakUEQkVx9868O9ehXChICqkNiDGvis/VeOIgUtWN80b6hvLqIj6ZNsZ/up7XFf2aD4dJK4yPIYhsg4Ikpn1cOVxw6Gn9dl0eJ3jdG8rmveUVfKfxXdVXQF6NdeaB7PaJPKsiPvNdZOUr1ckt6WqSMognLOIxcBBaBEOOMCFrbBjLyDxDkbkctTkwbP00g0hqQq2k4SsmRzrK4G45R+CtAVd+nUq0cdOalEcIcQQcqCsPqXS5Q7J23rl7/VWImFuJCoWgnh4AmYlnaIiGLmEmnIE5GIYaN2VC+i+lVBR+Qja6iKoRQ0U2ue22w2WhskBRmHp2Wy2QD/mz+trQ6qj960fMt7ldviHGqwjcDhd5lvgHqdjHpFoMj7W+ex44rHP8iWB/3ry7VGCCH9p43CvtYmQujHAgwP2y57C+u0xupHDyKgsp3QZYR2IQS18ELmxyfzMGTUc1plhZF0E5h42jBtvhNiocFA/4oui1idmHnBqmMajjMZXHmsiexbrFTXkuU36i5oMCrBG5Sgl4wDUARKzxvaQOna3Tegd7JG0N+WkRAUqn479nBxK6MxmHs8MvkW6l0k13uUVRrtOtIr/vKN6Yiiv/id2gYGb+qUkKTEU9iPvdW6+sGj3g6YjUFdm8aH91J+U5bKa5mXZl392qdSOw5IOHzrO80EUYLBd8Q43nP42WMVOQzM1DkRuNVK16HNLRiM8zA8fOv7uiMOjfYvwLLhugiIEnd2kowdkCa5GRyyB6WpJQZZBMQ7ObDCr1l1o0ln7EAmz8oAYqhoW8ew2NAnRPx+UyQGX6G/NWI5WeDkOorNac+qA53oRKAWQuqpmr49zhdc+eSSXg4Nz9Knky6g0y/kGvUukmMvRT5SExG9wHu/fn26s+O/+uOzW8svHC0ht+g6JQyGotPUeqsZL8dt7xkMQ1Uh1uxE7atTO9dGrGhlRP/bAm0lELY33P04HDaiSwVLjpKNy0jLxanMkxrHqUqPWKkXthlsfmRM4Ls5JyoiSd8RZ5zgemtejvc0KhX6hIUTdhlOhpC9+xnx+II7kaH9iSso/Xi5pTi5aJgYmgVXt9TpF9KJl9iAEtUM7T99xFFrilU0QqP9hwzSpI4JibagYPqmzDeq8SvKIE22IIHqGF1UhNWvvCznhmyjgZ8S1x8yj/kh06t73LeXWGypitbK4hBulDln98cXHXGovX3jMspN6N7c+u0yZPzsu7ejFy03xJZTJAkjttEubfKxf8PEO4UT2qncTtb15GS5CacMqW6W83JKJ5dEeqSp27Kr59pnrqFRWZ9wkcEZlKHZkE9CRKAM0HQiJrzSb352pm/Sv759bq/WlGEVjdH1RnIaJmq1xOazDv+slZB03lO3o+lELDFMy0a1liWNRw6/PjVJ3/HxwQ1bLXpIslv+Ul3IIxVmFMP4acGu6xzNa+6ge7rWcWK0H5vam1Ug2UVMTbg+OO71DWsDSgPZYcy9BHJlLcabRs9Dv+qVJh5TGkMqM8yvA1qIWp3woVeXHyQB+fqSVV+ZmOcgpi+C6rjEQI75kMEybYLPp5RTTrG7rMvuDVTKP4DedkUwujrxrHVNYQF6bTv7cMp44kW5FKPaZPQiUrU8qcw/6E+Xz0Tyi3dSwJLrhILEn420/GRbLDea8Q2Z9I2xJsGM98F0ofVAe60tPb0BKSEC+zp4cq268LvNc33zQtt2QujtE1owZBehcT2Ert2sryp6MdFmaeyRpj5F3e9UJl1YLMAp3hcbASXo3dDIfEH9Rf1NbQh0OJ93IXTtfy4iohvXJM1QX9H66drjFKg/dqX6/SH1xwVQGkuf/e1EBKQJgcQ1Q0IEm3QMaOJfztjNqbKbDj8be9A7sPtDSAgU32UMLMEAUVO38SpLT6RRStkh0toegXvhB5AOqtfyiDsRIQ/9lzV5PTbglIFMU6SnUjRE8q/dMTZLfFfko4zRJP60N/a208ew/PNz0aVnPrwqZe4l9YN49QNWxHruncZs9eGzoYxhQahr1Soohu35wsFj+6XzPf2nCeRlcN84zpKcVNtEcnObrjfwOWFQgOzLeLcdmnBpzHlds+YIYc1KH0Jvf/H0IXM8DpFNAQb0x7FVMFbBSN9FWAb3SRT5FfTdhigrH+gXj/dS8hsUZ9ygiWkmMnXsKCcbw4Lyj0BN7EW6g3EM8klDBIp4Lo5BncvEU1eU6kJaSHKyBYaIFOfEQqlhSiVL7ENRY3qqNCjf2Gtt4ZH8YU1fUKzW6WgebUPVM9u1euvlRA1LLicmlxRlvS5nW970qp2PPhKmDXMQEUeQcYEO1DgNkiZDuAugj+l3hoy+4ZDWB50g0xA/D9n9RejrLwGnAKYCVMa4iCa4B/Dkld4LnoaAOkTU/UiOxNAV3nxVDFwcQSDhQ/hfAWWm16AjAFE+Io4hfrz6sLeE+t0qCkBG8CJU/vb6/R935acloQKozcS3gomgvovuR9C7q29jhZ9n6WkzKoL7Ih4tWmrXH3ix6C5B98fR79ph3D6qy6CN/TUWj05aPwO9baHW/taqK0npy1a8ArjbC+C+ajNM2lmtJSTvoPrMlq5IYiSp89BqizwVAprgo4snX5B5NPJ0dH0SseM20F9a7X6z+L//yfDXFh7/moTG4RHa49rngfKk2YsG7q9/6YFSab8yk/Ny+Z5SBFTeeePBTBVbL5wA2O8a9ZUEeid1uscm57iDAzotj0tlGhuRrZLvZ4XxDZvl7bM4FVtCGbauLH5g5RkOKxlL68/f2ITl6A9qT6ifPtwddrEJJphgggkmmGCCO4j/A4X4JeL+/1ahAAAAAElFTkSuQmCC`


export const CLOSE_IMG_BASE64 = `data:image/png;base64,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`

export const PLAY_ICON_BASE64 = `data:image/png;base64,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`