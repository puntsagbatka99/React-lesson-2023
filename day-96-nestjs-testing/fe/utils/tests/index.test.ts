import { composeArticleSlug, cutTextToLength, extractArticleIdFromSlug, slugify } from "../index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20))
           .toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

const test1 = "JavaScript is Fun!"

describe("test", () => {
    it("should cut text to length", () => {
        expect(slugify(test1))
            .toBe("javascript-is-fun")
    })
})

const test2 = "JavaScript is Fun!"
const id = 123;

describe("test", () => {
    it("should cut text to lenght", () => {
        expect(composeArticleSlug(id, test2))
            .toBe("javascript-is-fun-123")
    })
})

const slug = "JavaScript-is-Fun!"

describe("test", () => {
    it("shold", () => {
        expect(extractArticleIdFromSlug(slug))
        .toBe("Fun!")
    })
})